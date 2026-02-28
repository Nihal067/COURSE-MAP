const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const Progress = require('../models/Progress');

// All routes require authentication
router.use(authMiddleware);

// ── GET /api/progress/:domainId ───────────────────────────────────
router.get('/:domainId', async (req, res) => {
    try {
        const record = await Progress.findOne({
            userId: req.userId,
            domainId: req.params.domainId
        });
        res.json({ completedSteps: record ? record.completedSteps : [] });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// ── POST /api/progress/:domainId — save completed steps ──────────
router.post('/:domainId', async (req, res) => {
    try {
        const { completedSteps } = req.body;
        if (!Array.isArray(completedSteps))
            return res.status(400).json({ message: 'completedSteps must be an array.' });

        const record = await Progress.findOneAndUpdate(
            { userId: req.userId, domainId: req.params.domainId },
            { completedSteps, updatedAt: Date.now() },
            { upsert: true, new: true }
        );

        res.json({ completedSteps: record.completedSteps });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
