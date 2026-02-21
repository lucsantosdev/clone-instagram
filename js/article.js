const topicButtons = document.querySelectorAll('.topic-btn');
const analysisPanels = document.querySelectorAll('.analysis-panel');

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
