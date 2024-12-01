// Tab navigation
const tabs = document.querySelectorAll('.tab');
const containers = document.querySelectorAll('.projects-container');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        containers.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
    });
});