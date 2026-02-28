/* ===== COURSEMAP THEME ENGINE =====
   Manages dark / light mode toggle across all pages.
   Persists preference to localStorage as 'cm_theme'.
   ================================================= */

(function () {
    const STORAGE_KEY = 'cm_theme';
    const LIGHT = 'light';
    const DARK = 'dark';

    /* ── Apply theme immediately (before DOM paint) ── */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        // Update all toggle buttons on the page
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            btn.textContent = theme === LIGHT ? '🌙' : '☀️';
            btn.title = theme === LIGHT ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        });
    }

    /* ── Get saved or system preference ── */
    function getSavedTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        // Fallback: honour OS preference
        return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
    }

    /* ── Toggle ── */
    function toggle() {
        const current = document.documentElement.getAttribute('data-theme') || DARK;
        const next = current === LIGHT ? DARK : LIGHT;
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    }

    /* ── Init: apply theme ASAP, then wire buttons ── */
    const theme = getSavedTheme();
    applyTheme(theme);

    document.addEventListener('DOMContentLoaded', () => {
        // Update icons once DOM is ready (in case applyTheme ran before buttons existed)
        applyTheme(document.documentElement.getAttribute('data-theme') || DARK);
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            btn.addEventListener('click', toggle);
        });
    });

    // Expose globally
    window.ThemeEngine = { toggle, applyTheme, getSavedTheme };
})();
