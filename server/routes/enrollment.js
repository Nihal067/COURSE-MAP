const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const Enrollment = require('../models/Enrollment');

// All routes require authentication
router.use(authMiddleware);

// ── GET /api/enrollment — get user's enrolled domain IDs ──────────
router.get('/', async (req, res) => {
    try {
        const record = await Enrollment.findOne({ userId: req.userId });
        res.json({ domainIds: record ? record.domainIds : [] });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// ── POST /api/enrollment/:domainId — enroll in a domain ──────────
router.post('/:domainId', async (req, res) => {
    try {
        const { domainId } = req.params;
        let record = await Enrollment.findOne({ userId: req.userId });

        if (!record) {
            record = new Enrollment({ userId: req.userId, domainIds: [domainId] });
        } else if (!record.domainIds.includes(domainId)) {
            record.domainIds.push(domainId);
        }

        await record.save();
        res.json({ domainIds: record.domainIds });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// ── DELETE /api/enrollment/:domainId — unenroll ───────────────────
router.delete('/:domainId', async (req, res) => {
    try {
        const { domainId } = req.params;
        const record = await Enrollment.findOne({ userId: req.userId });

        if (record) {
            record.domainIds = record.domainIds.filter(id => id !== domainId);
            await record.save();
        }

        res.json({ domainIds: record ? record.domainIds : [] });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
