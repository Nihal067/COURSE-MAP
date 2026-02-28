const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// ── GET /api/notifications/status ───────────────────────────────
router.get('/status', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('emailNotifs name email');
        if (!user) return res.status(404).json({ message: 'User not found.' });
        res.json({ emailNotifs: user.emailNotifs });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// ── POST /api/notifications/toggle ──────────────────────────────
router.post('/toggle', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'User not found.' });
        user.emailNotifs = !user.emailNotifs;
        await user.save();
        res.json({ emailNotifs: user.emailNotifs });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
