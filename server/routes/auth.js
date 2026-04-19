const router = require('express').Router();
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
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

// GET /api/auth/google-config - Share Client ID with Frontend
router.get('/google-config', (req, res) => {
    const clientId = process.env.GOOGLE_CLIENT_ID || '';
    if (!clientId) {
        return res.json({ enabled: false });
    }
    return res.json({ enabled: true, clientId });
});

// POST /api/auth/google - Verify Google Token and Login/Signup
router.post('/google', async (req, res) => {
    try {
        const { credential } = req.body;
        if (!credential) {
            return res.status(400).json({ message: 'Missing Google credential.' });
        }

        // Verify token securely using Google's tokeninfo endpoint
        const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
        const payload = await response.json();

        if (payload.error || !payload.email || !payload.sub) {
            return res.status(401).json({ message: 'Invalid Google token.' });
        }

        // Verify it was meant for our app
        if (process.env.GOOGLE_CLIENT_ID && payload.aud !== process.env.GOOGLE_CLIENT_ID) {
            return res.status(401).json({ message: 'Unauthorized client.' });
        }

        const email = normalizeEmail(payload.email);
        const name = payload.name || 'Google User';
        const googleId = payload.sub;

        // Find existing user or create a new one
        let user = await User.findOne({ email });

        if (user) {
            // Link Google ID if they originally signed up with a password
            if (!user.googleId) {
                user.googleId = googleId;
                await user.save();
            }
        } else {
            // Create brand new Google user (no password required because we made it optional!)
            user = new User({
                name,
                email,
                googleId,
                picture: payload.picture
            });
            await user.save();
            
            if (mailer && typeof mailer.sendWelcomeEmail === 'function') {
                mailer.sendWelcomeEmail(email, name).catch(err =>
                    console.warn('Welcome email failed:', err.message)
                );
            }
        }

        // Log them into OUR system with OUR token
        const token = signToken(user._id);
        return res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('CRITICAL: Google login error:', {
            message: err.message,
            stack: err.stack,
            body: req.body ? 'present' : 'missing'
        });
        
        // Return a more descriptive error temporarily for debugging
        const errorDetail = err.message || 'Unknown backend error';
        return res.status(500).json({ 
            message: `Server error during Google Login: ${errorDetail}`,
            error: err.name
        });
    }
});

module.exports = router;
