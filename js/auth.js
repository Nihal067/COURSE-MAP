/* ===== AUTHENTICATION MODULE ===== */

const Auth = (() => {
    const USERS_KEY = 'courseRoadmap_users';
    const SESSION_KEY = 'courseRoadmap_session';

    function getUsers() {
        return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    }

    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    function setSession(user) {
        const session = {
            name: user.name,
            email: user.email,
            loginAt: Date.now()
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }

    function getSession() {
        const data = localStorage.getItem(SESSION_KEY);
        return data ? JSON.parse(data) : null;
    }

    function clearSession() {
        localStorage.removeItem(SESSION_KEY);
    }

    function signup(name, email, password) {
        const users = getUsers();

        if (users.some(u => u.email === email.toLowerCase())) {
            return { success: false, message: 'An account with this email already exists.' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters.' };
        }

        const newUser = {
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: password,
            createdAt: Date.now()
        };

        users.push(newUser);
        saveUsers(users);
        setSession(newUser);

        return { success: true, message: 'Account created successfully!' };
    }

    function login(email, password) {
        const users = getUsers();
        const user = users.find(u => u.email === email.toLowerCase().trim());

        if (!user) {
            return { success: false, message: 'This account is not registered with us. Please create an account first.' };
        }

        if (user.password !== password) {
            return { success: false, message: 'Incorrect password. Please try again.' };
        }

        setSession(user);
        return { success: true, message: 'Welcome back, ' + user.name + '!' };
    }

    function logout() {
        clearSession();
        window.location.href = 'index.html';
    }

    function isLoggedIn() {
        return getSession() !== null;
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
