/* ===== AUTHENTICATION MODULE — Backend-connected ===== */

const Auth = (() => {

    function getSession() {
        return API.getUser();
    }

    function isLoggedIn() {
        return !!API.getToken() && !!API.getUser();
    }

    async function signup(name, email, password) {
        try {
            const data = await API.register(name, email, password);
            API.saveSession(data.token, data.user);
            return { success: true, message: 'Account created successfully!' };
        } catch (err) {
            return { success: false, message: err.message };
        }
    }

    async function login(email, password) {
        try {
            const data = await API.login(email, password);
            API.saveSession(data.token, data.user);
            return { success: true, message: 'Welcome back, ' + data.user.name + '!' };
        } catch (err) {
            return { success: false, message: err.message };
        }
    }

    function logout() {
        API.clearSession();
        window.location.href = 'index.html';
    }

    function requireAuth() {
        if (!isLoggedIn()) {
            window.location.href = 'index.html';
            return false;
        }
        return true;
    }

    function getCurrentUser() {
        return getSession();
    }

    return { signup, login, logout, isLoggedIn, requireAuth, getCurrentUser };
})();
