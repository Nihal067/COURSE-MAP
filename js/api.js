/* ===== COURSEMAP API WRAPPER =====
   All calls to the backend go through this module.
   Token is stored in localStorage under 'cm_token'.
   ================================================= */

// Set window.COURSEMAP_API_BASE before loading this file to override:
// <script>window.COURSEMAP_API_BASE = 'https://api.example.com';</script>
function normalizeBase(base) {
    const value = String(base || '').trim();
    if (!value) return '';
    return value
        .replace(/\/+$/, '')
        .replace(/\/api$/i, '');
}

const localStorageBase = (() => {
    try { return localStorage.getItem('cm_api_base') || ''; } catch { return ''; }
})();

const configuredBase = normalizeBase(window.COURSEMAP_API_BASE || localStorageBase);
const currentOrigin = normalizeBase(window.location.origin && window.location.origin !== 'null' ? window.location.origin : '');
const shouldTryLocalhost = ['localhost', '127.0.0.1', ''].includes(window.location.hostname)
    || window.location.protocol === 'file:'
    || window.location.origin === 'null';
const localhostBase = 'http://localhost:5000';

const CANDIDATE_BASES = [...new Set([
    configuredBase,
    currentOrigin,
    shouldTryLocalhost ? localhostBase : ''
].filter(Boolean))];

let API_BASE = CANDIDATE_BASES[0] || localhostBase;

const API = (() => {
    function getToken() {
        return localStorage.getItem('cm_token') || '';
    }

    function saveSession(token, user) {
        localStorage.setItem('cm_token', token);
        localStorage.setItem('cm_user', JSON.stringify(user));
    }

    function clearSession() {
        localStorage.removeItem('cm_token');
        localStorage.removeItem('cm_user');
    }

    function getUser() {
        try {
            return JSON.parse(localStorage.getItem('cm_user') || 'null');
        } catch { return null; }
    }

    async function request(method, path, body) {
        const token = getToken();
        const bases = [API_BASE, ...CANDIDATE_BASES.filter(b => b !== API_BASE)];
        let lastNetworkError = null;
        const isPublicAuthCall = /^\/api\/auth\/(login|register)$/i.test(path);

        for (const base of bases) {
            const opts = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            if (token && !isPublicAuthCall) opts.headers.Authorization = 'Bearer ' + token;
            if (body) opts.body = JSON.stringify(body);

            try {
                const res = await fetch(base + path, opts);
                const contentType = String(res.headers.get('content-type') || '').toLowerCase();
                const isJson = contentType.includes('application/json');
                const raw = await res.text();
                let data = {};
                try {
                    data = raw ? JSON.parse(raw) : {};
                } catch {
                    data = { message: raw || `HTTP ${res.status}` };
                }

                // If current host serves only static files, /api may 404.
                // Try next candidate base before failing.
                if (bases.length > 1 && res.status === 404 && (base === currentOrigin || !isJson)) {
                    continue;
                }

                // Retry another candidate when current candidate is unhealthy.
                if (bases.length > 1 && res.status >= 500) {
                    continue;
                }

                // If this endpoint should be JSON API but we got HTML/text from a wrong host,
                // try next candidate.
                if (bases.length > 1 && /^\/api\//i.test(path) && !isJson) {
                    continue;
                }

                if (!res.ok) throw new Error(data.message || 'Request failed');

                // Auth endpoints must return token + user. Otherwise we likely hit a wrong base.
                if (isPublicAuthCall && (!data || !data.token || !data.user)) {
                    if (bases.length > 1) continue;
                    throw new Error('Invalid auth response from backend.');
                }

                if (API_BASE !== base) {
                    API_BASE = base;
                    try { localStorage.setItem('cm_api_base', base); } catch { }
                }
                return data;
            } catch (err) {
                const msg = String(err && err.message ? err.message : '');
                const isNetworkError = err instanceof TypeError
                    || /Failed to fetch|NetworkError|Load failed|fetch/i.test(msg);
                if (isNetworkError) {
                    lastNetworkError = err;
                    continue;
                }
                throw err;
            }
        }

        if (lastNetworkError) {
            try { localStorage.removeItem('cm_api_base'); } catch { }
            throw new Error('Cannot connect to backend. Start server or set window.COURSEMAP_API_BASE to your backend URL.');
        }
        throw new Error('Request failed');
    }

    return {
        getToken,
        getUser,
        saveSession,
        clearSession,

        // Auth
        register: (name, email, password) =>
            request('POST', '/api/auth/register', { name, email, password }),
        login: (email, password) =>
            request('POST', '/api/auth/login', { email, password }),
        me: () =>
            request('GET', '/api/auth/me'),

        // Enrollment
        getEnrollment: () =>
            request('GET', '/api/enrollment'),
        enroll: (domainId) =>
            request('POST', `/api/enrollment/${domainId}`),
        unenroll: (domainId) =>
            request('DELETE', `/api/enrollment/${domainId}`),

        // Progress
        getProgress: (domainId) =>
            request('GET', `/api/progress/${domainId}`),
        saveProgress: (domainId, completedSteps) =>
            request('POST', `/api/progress/${domainId}`, { completedSteps }),

        // Ratings
        getRatings: (domainId, stepIndex) =>
            request('GET', `/api/ratings/${domainId}/${stepIndex}`),
        submitRating: (domainId, stepIndex, resourceUrl, stars) =>
            request('POST', '/api/ratings', { domainId, stepIndex, resourceUrl, stars }),

        // Notifications
        getNotifStatus: () =>
            request('GET', '/api/notifications/status'),
        toggleNotifs: () =>
            request('POST', '/api/notifications/toggle')
    };
})();
