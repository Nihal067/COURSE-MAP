const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-this-secret';
if (!process.env.JWT_SECRET) {
    console.warn('JWT_SECRET is missing. Using a development fallback secret.');
}
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

router.post('/register', async (req, res) => {
    try {
        const name = String(req.body.name || '').trim();
        const email = normalizeEmail(req.body.email);
        const password = String(req.body.password || '');

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Name, email and password are required for signup.'
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
