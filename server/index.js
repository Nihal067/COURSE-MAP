require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ── Middleware ──────────────────────────────────────────────────
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true
}));
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enrollment', require('./routes/enrollment'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/ratings', require('./routes/ratings'));
app.use('/api/notifications', require('./routes/notifications'));

// ── Health check ────────────────────────────────────────────────
app.get('/', (req, res) => res.json({ status: 'CourseMap API running ✅' }));

// ── Connect MongoDB & Start ──────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    })
    .catch(err => {
        console.error('❌ MongoDB connection failed:', err.message);
        console.error('👉 Check your MONGO_URI in server/.env');
        process.exit(1);
    });
