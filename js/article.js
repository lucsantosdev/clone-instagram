const topicButtons = document.querySelectorAll('.topic-btn');
const analysisPanels = document.querySelectorAll('.analysis-panel');
const themeToggleButton = document.querySelector('.theme-toggle');
const themeStorageKey = 'article-theme';

function activateTopic(topic) {
    topicButtons.forEach((button) => {
        const isActive = button.dataset.topic === topic;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });

    analysisPanels.forEach((panel) => {
        const isActive = panel.dataset.topic === topic;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
    });
}

topicButtons.forEach((button) => {
    button.addEventListener('click', () => activateTopic(button.dataset.topic));
});

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
