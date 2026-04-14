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
    console.warn('⚠️ MONGO_URI is missing. Server will run in "Setup Mode" until configured.');
    
    // Serve a simple setup guide if the database isn't connected yet
    app.get('*', (req, res) => {
        res.status(200).send(`
            <div style="font-family: sans-serif; padding: 40px; text-align: center; color: #333; background: #f9f9f9; min-height: 100vh;">
                <h1 style="color: #6366f1;">🚀 Almost there!</h1>
                <p style="font-size: 18px;">Your CourseMap application is successfully deployed, but it needs a <b>database connection</b> to work.</p>
                <div style="max-width: 600px; margin: 40px auto; text-align: left; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <h3>How to finish the setup:</h3>
                    <ol>
                        <li>Go to your <b>Render Dashboard</b>.</li>
                        <li>Select this service and go to the <b>Environment</b> tab.</li>
                        <li>Add a variable named <code>MONGO_URI</code> with your MongoDB Atlas string.</li>
                        <li>Add <code>GEMINI_API_KEY</code> and <code>JWT_SECRET</code>.</li>
                    </ol>
                    <p><i>The app will automatically restart and go live once you save those settings!</i></p>
                </div>
            </div>
        `);
    });

    app.listen(PORT, '0.0.0.0', () => console.log(`Server listening in SETUP MODE on port ${PORT}`));
} else {
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
            console.error('Check your MONGO_URI in your environment variables.');
            // Still run the app so it doesn't crash Render, allowing logs to be seen.
            app.get('*', (req, res) => res.send('Database Connection Failed. Check server logs.'));
            app.listen(PORT, '0.0.0.0', () => console.log(`Server listening (DB Pending) on port ${PORT}`));
        });
}
