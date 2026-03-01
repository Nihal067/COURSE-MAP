/* ===== COURSEMAP THEME ENGINE =====
   Manages dark / light mode toggle across all pages.
   Persists preference to localStorage as 'cm_theme'.
   ================================================= */

(function () {
    const STORAGE_KEY = 'cm_theme';
    const LIGHT = 'light';
    const DARK = 'dark';

    /* â”€â”€ Apply theme immediately (before DOM paint) â”€â”€ */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        // Update all toggle buttons on the page with icons
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            if (theme === LIGHT) {
                btn.innerHTML = '🌙 Dark';
                btn.title = 'Switch to dark mode';
            } else {
                btn.innerHTML = '☀️ Light';
                btn.title = 'Switch to light mode';
            }
            btn.setAttribute('aria-label', btn.title);
        });
    }

    /* â”€â”€ Get saved or system preference â”€â”€ */
    function getSavedTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        // Fallback: default to light theme for first-time users.
        return LIGHT;
    }

    /* â”€â”€ Toggle â”€â”€ */
    function toggle() {
        const current = document.documentElement.getAttribute('data-theme') || DARK;
        const next = current === LIGHT ? DARK : LIGHT;
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    }

    /* â”€â”€ Init: apply theme ASAP, then wire buttons â”€â”€ */
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



