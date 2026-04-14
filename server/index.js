require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const ROOT_DIR = path.resolve(__dirname, '..');

const allowedOrigins = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);
const appUrl = (process.env.APP_URL || '').trim();

function normalizeOrigin(origin) {
    return String(origin || '').trim().replace(/\/+$/, '');
}

function isLocalOrigin(origin) {
    try {
        const hostname = new URL(origin).hostname;
        return hostname === 'localhost' || hostname === '127.0.0.1';
    } catch {
        return false;
    }
}

app.use(cors({
    origin(origin, callback) {
        // Allow non-browser requests and local tooling.
        if (!origin) return callback(null, true);

        // If CORS_ORIGIN is empty, stay permissive to keep local setup simple.
        if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        const normalizedOrigin = normalizeOrigin(origin);
        const normalizedAppUrl = normalizeOrigin(appUrl);

        // Always allow local dev origins and APP_URL origin.
        if (isLocalOrigin(normalizedOrigin) || (normalizedAppUrl && normalizedOrigin === normalizedAppUrl)) {
            return callback(null, true);
        }

        // Keep auth stable even when CORS_ORIGIN is misconfigured.
        console.warn(`CORS origin "${origin}" not in CORS_ORIGIN list. Allowing request (permissive fallback).`);
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/enrollment', require('./routes/enrollment'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/ratings', require('./routes/ratings'));
app.use('/api/notifications', require('./routes/notifications'));

// Secure AI Proxy for Chatbot
app.post('/api/chat', async (req, res) => {
  const { contents, systemInstruction } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, systemInstruction })
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Gemini Proxy Error:', err);
    res.status(500).json({ error: 'Failed to communicate with AI service' });
  }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'CourseMap API running' });
});

// Serve static frontend from repo root so one deployment URL hosts both UI + API.
app.use('/css', express.static(path.join(ROOT_DIR, 'css')));
app.use('/js', express.static(path.join(ROOT_DIR, 'js')));
app.get('/logo.jpg', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'logo.jpg'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'dashboard.html'));
});

app.get('/roadmap.html', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'roadmap.html'));
});

const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is missing. Add it to server/.env or deployment env vars.');
    process.exit(1);
}
if (!process.env.JWT_SECRET) {
    console.warn('JWT_SECRET is missing. A development fallback secret will be used.');
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`));
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        console.error('Check your MONGO_URI in server/.env');
        process.exit(1);
    });
