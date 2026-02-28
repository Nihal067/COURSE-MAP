const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const Rating = require('../models/Rating');

// ── POST /api/ratings — submit or update a rating ────────────────────
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { domainId, stepIndex, resourceUrl, stars } = req.body;

        if (!domainId || stepIndex === undefined || !resourceUrl || !stars)
            return res.status(400).json({ message: 'domainId, stepIndex, resourceUrl, and stars are required.' });

        if (stars < 1 || stars > 5)
            return res.status(400).json({ message: 'Stars must be between 1 and 5.' });

        // Upsert: update if already rated, insert if not
        await Rating.findOneAndUpdate(
            { userId: req.userId, domainId, stepIndex: Number(stepIndex), resourceUrl },
            { stars: Number(stars), createdAt: Date.now() },
            { upsert: true, new: true }
        );

        res.json({ message: 'Rating saved.' });
    } catch (err) {
        console.error('Rating error:', err);
        res.status(500).json({ message: 'Server error saving rating.' });
    }
});

// ── GET /api/ratings/:domainId/:stepIndex — fetch ratings for a step ─
router.get('/:domainId/:stepIndex', authMiddleware, async (req, res) => {
    try {
        const { domainId, stepIndex } = req.params;

        const ratings = await Rating.find({ domainId, stepIndex: Number(stepIndex) });

        // Group by resourceUrl: compute average
        const avgMap = {};
        const userMap = {};  // user's own rating per URL

        ratings.forEach(r => {
            const url = r.resourceUrl;
            if (!avgMap[url]) avgMap[url] = { total: 0, count: 0 };
            avgMap[url].total += r.stars;
            avgMap[url].count++;
            if (String(r.userId) === String(req.userId)) {
                userMap[url] = r.stars;
            }
        });

        // Build final result: { url: { avg, count, userStars } }
        const result = {};
        Object.entries(avgMap).forEach(([url, { total, count }]) => {
            result[url] = {
                avg: Math.round((total / count) * 10) / 10,
                count,
                userStars: userMap[url] || 0
            };
        });

        res.json({ ratings: result });
    } catch (err) {
        console.error('Get ratings error:', err);
        res.status(500).json({ message: 'Server error fetching ratings.' });
    }
});

module.exports = router;
