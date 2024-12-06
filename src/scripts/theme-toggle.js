// Set default to dark mode on page load based on localStorage
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    const isMainPage = window.location.pathname === '/Portfolio-Website/src/' || window.location.pathname.endsWith('index.html');


    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const header = document.querySelector('header');
        header.classList.add('dark-mode');
        document.querySelectorAll('.project-card').forEach(card => card.classList.add('dark-mode'));
        document.querySelectorAll('.side-icon').forEach(icon => icon.classList.add('dark-mode'));

        // Set the toggle button to checked (dark mode)
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.setAttribute('aria-checked', 'true');
        document.getElementById('sun-icon').style.display = 'none';
        document.getElementById('moon-icon').style.display = 'inline';
        document.querySelector('.ant-switch-handle').style.transform = 'translateX(26px)';
    } else {
        document.body.classList.remove('dark-mode');
        const header = document.querySelector('header');
        header.classList.remove('dark-mode');
        document.querySelectorAll('.project-card').forEach(card => card.classList.remove('dark-mode'));
        document.querySelectorAll('.side-icon').forEach(icon => icon.classList.remove('dark-mode'));

        // Set the toggle button to unchecked (light mode)
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.setAttribute('aria-checked', 'false');
        document.getElementById('sun-icon').style.display = 'inline';
        document.getElementById('moon-icon').style.display = 'none';
        document.querySelector('.ant-switch-handle').style.transform = 'translateX(0)';
    }

    if (isMainPage) {
        // Main Page
        const emailIcon = document.getElementById('email-icon');
        const githubIcon = document.getElementById('github-icon');
        const linkedinIcon = document.getElementById('linkedin-icon');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        
        emailIcon.src = isDarkMode ? 'icons/email-white.svg' : 'icons/email-black.svg';
        githubIcon.src = isDarkMode ? 'icons/github-white.svg' : 'icons/github-black.svg';
        linkedinIcon.src = isDarkMode ? 'icons/linkedin-white.svg' : 'icons/linkedin-black.svg';
        hamburgerIcon.src = isDarkMode ? 'icons/hamburger-light.svg' : 'icons/hamburger-dark.svg';
    } else {
        // Project page
        const backIcon = document.getElementById('back-icon');
        
        backIcon.src = isDarkMode ? '../icons/back-light.svg' : '../icons/back-dark.svg';
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const handle = document.querySelector('.ant-switch-handle');

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    const isMainPage = window.location.pathname === '/Portfolio-Website/src/' || window.location.pathname.endsWith('index.html');


    const htmlElement = document.documentElement;    
    if (!isDarkMode) {
        // Switch to light mode
        htmlElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        htmlElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }

    header.classList.toggle('dark-mode');
    document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('.side-icon').forEach(icon => icon.classList.toggle('dark-mode'));

    // Update the aria-checked attribute of the switch
    themeToggle.setAttribute('aria-checked', isDarkMode);

    // Toggle the sun and moon icons visibility
    sunIcon.style.display = isDarkMode ? 'none' : 'inline';
    moonIcon.style.display = isDarkMode ? 'inline' : 'none';

    // Move the handle left or right based on the mode
    handle.style.transform = isDarkMode ? 'translateX(26px)' : 'translateX(0)';

    // Save the theme preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    if (isMainPage) {
        // Main Page
        const emailIcon = document.getElementById('email-icon');
        const githubIcon = document.getElementById('github-icon');
        const linkedinIcon = document.getElementById('linkedin-icon');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        
        emailIcon.src = isDarkMode ? 'icons/email-white.svg' : 'icons/email-black.svg';
        githubIcon.src = isDarkMode ? 'icons/github-white.svg' : 'icons/github-black.svg';
        linkedinIcon.src = isDarkMode ? 'icons/linkedin-white.svg' : 'icons/linkedin-black.svg';
        hamburgerIcon.src = isDarkMode ? 'icons/hamburger-light.svg' : 'icons/hamburger-dark.svg';
    } else {
        // Project page
        const backIcon = document.getElementById('back-icon');
        
        backIcon.src = isDarkMode ? '../icons/back-light.svg' : '../icons/back-dark.svg';
    }
});
