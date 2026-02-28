/* ===== COURSEMAP API WRAPPER =====
   All calls to the backend go through this module.
   Token is stored in localStorage under 'cm_token'.
   ================================================= */

const API_BASE = 'http://localhost:5000';

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
        const opts = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        };
        if (body) opts.body = JSON.stringify(body);

        const res = await fetch(API_BASE + path, opts);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Request failed');
        return data;
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
