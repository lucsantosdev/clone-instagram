const themeToggleButton = document.querySelector('.theme-toggle');
const themeStorageKey = 'article-theme';

if (themeToggleButton) {
    function applyTheme(theme) {
        const isDark = theme === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeToggleButton.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
        themeToggleButton.setAttribute('aria-pressed', String(isDark));
    }

    const savedTheme = localStorage.getItem(themeStorageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);

    themeToggleButton.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem(themeStorageKey, nextTheme);
    });
}
