// Initialize AOS
AOS.init({
    once: true // Run animations only once
});

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


// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const handle = document.querySelector('.ant-switch-handle');

themeToggle.addEventListener('click', () => {
    // Toggle dark mode on body and header
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');

    document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('.side-icon').forEach(icon => icon.classList.toggle('dark-mode'));

    // Update the aria-checked attribute of the switch
    const isChecked = document.body.classList.contains('dark-mode');
    themeToggle.setAttribute('aria-checked', isChecked);

    // Toggle the sun and moon icons visibility
    sunIcon.style.display = isChecked ? 'none' : 'inline';
    moonIcon.style.display = isChecked ? 'inline' : 'none';

    // Move the handle left or right based on the mode
    handle.style.transform = isChecked ? 'translateX(30px)' : 'translateX(0)';
});


const emailIcon = document.getElementById('email-icon');
const githubIcon = document.getElementById('github-icon');
const linkedinIcon = document.getElementById('linkedin-icon');

document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update icons based on the theme
    emailIcon.src = isDarkMode ? 'icons/email-white.svg' : 'icons/email-black.svg';
    githubIcon.src = isDarkMode ? 'icons/github-white.svg' : 'icons/github-black.svg';
    linkedinIcon.src = isDarkMode ? 'icons/linkedin-white.svg' : 'icons/linkedin-black.svg';
});
