const crypto = require('crypto');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-this-secret';
if (!process.env.JWT_SECRET) {
    console.warn('JWT_SECRET is missing. Using a development fallback secret.');
}

const OTP_EXPIRY_MS = 10 * 60 * 1000;
const OTP_RESEND_COOLDOWN_MS = 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;

// In-memory OTP store: email -> { otpHash, expiresAt, lastSentAt, attempts }
const signupOtpStore = new Map();

let mailer = null;
try {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        mailer = require('../utils/mailer');
    }
} catch (_) { }

function signToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generateOtp() {
    return String(crypto.randomInt(100000, 1000000));
}

function hashOtp(otp) {
    return crypto.createHash('sha256').update(String(otp)).digest('hex');
}

router.post('/request-signup-otp', async (req, res) => {
    try {
        const email = normalizeEmail(req.body.email);

        if (!email) {
            return res.status(400).json({ message: 'Email is required.' });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: 'Please enter a valid email address.' });
        }
        if (!mailer || typeof mailer.sendSignupOtpEmail !== 'function') {
            return res.status(503).json({
                message: 'OTP email is not configured. Set EMAIL_USER and EMAIL_PASS on the server.'
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'An account with this email already exists. Please log in.' });
        }

        const now = Date.now();
        const existingOtp = signupOtpStore.get(email);
        if (existingOtp && existingOtp.expiresAt > now && (now - existingOtp.lastSentAt) < OTP_RESEND_COOLDOWN_MS) {
            return res.status(429).json({ message: 'Please wait 60 seconds before requesting a new OTP.' });
        }

        const otp = generateOtp();
        signupOtpStore.set(email, {
            otpHash: hashOtp(otp),
            expiresAt: now + OTP_EXPIRY_MS,
            lastSentAt: now,
            attempts: 0
        });

        await mailer.sendSignupOtpEmail(email, otp, Math.round(OTP_EXPIRY_MS / 60000));
        return res.json({ message: 'OTP sent to your email. It is valid for 10 minutes.' });
    } catch (err) {
        console.error('Request signup OTP error:', err);
        return res.status(500).json({ message: 'Server error while sending OTP.' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const name = String(req.body.name || '').trim();
        const email = normalizeEmail(req.body.email);
        const password = String(req.body.password || '');
        const otp = String(req.body.otp || '').trim();

        if (!name || !email || !password || !otp) {
            return res.status(400).json({
                message: 'Name, email, password and OTP are required for signup.'
            });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: 'Please enter a valid email address.' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters.' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        const otpRecord = signupOtpStore.get(email);
        if (!otpRecord || otpRecord.expiresAt < Date.now()) {
            signupOtpStore.delete(email);
            return res.status(400).json({ message: 'OTP expired or not found. Please request a new OTP.' });
        }

        if (otpRecord.attempts >= OTP_MAX_ATTEMPTS) {
            signupOtpStore.delete(email);
            return res.status(400).json({
                message: 'Too many invalid OTP attempts. Please request a new OTP.'
            });
        }

        if (otpRecord.otpHash !== hashOtp(otp)) {
            otpRecord.attempts += 1;
            signupOtpStore.set(email, otpRecord);
            return res.status(400).json({ message: 'Invalid OTP.' });
        }

        // OTP has been used successfully, consume it.
        signupOtpStore.delete(email);

        const user = new User({ name, email, passwordHash: password });
        await user.save();

        if (mailer && typeof mailer.sendWelcomeEmail === 'function') {
            mailer.sendWelcomeEmail(email, name).catch(err =>
                console.warn('Welcome email failed (non-fatal):', err.message)
            );
        }

        const token = signToken(user._id);
        return res.status(201).json({
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('Register error:', err);
        return res.status(500).json({ message: 'Server error during registration.' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const email = normalizeEmail(req.body.email);
        const password = String(req.body.password || '');

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'No account found with this email. Please sign up first.' });
        }

        const match = await user.comparePassword(password);
        if (!match) {
            return res.status(401).json({ message: 'Incorrect password. Please try again.' });
        }

        const token = signToken(user._id);
        return res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: 'Server error during login.' });
    }
});

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-passwordHash');
        if (!user) return res.status(404).json({ message: 'User not found.' });
        return res.json({ user });
    } catch (_) {
        return res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
