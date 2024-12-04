// Dropdown menu for mobile mode
document.getElementById('menu-toggle').addEventListener('click', () => {
    // Toggle the active class on the menu
    menu.classList.toggle('active');
    
    // If the menu is active, dynamically add the links inside a div
    if (menu.classList.contains('active')) {
        // Create a container div to hold the links
        const linkContainer = document.createElement('div');
        linkContainer.classList.add('link-container'); // Add a class for styling
        
        // Create the div elements dynamically
        const aboutLink = document.createElement('div');
        aboutLink.textContent = 'About';
        aboutLink.classList.add('menu-link'); // Add a class for styling

        const projectsLink = document.createElement('div');
        projectsLink.textContent = 'Projects';
        projectsLink.classList.add('menu-link'); // Add a class for styling

        const contactLink = document.createElement('div');
        contactLink.textContent = 'Contact';
        contactLink.classList.add('menu-link'); // Add a class for styling

        aboutLink.addEventListener('click', () => {
            window.location.href = '#about'; // Navigate to the about section
        });
        
        projectsLink.addEventListener('click', () => {
            window.location.href = '#projects'; // Navigate to the projects section
        });
        
        contactLink.addEventListener('click', () => {
            window.location.href = '#contact'; // Navigate to the contact section
        });

        // Add links to the container
        linkContainer.appendChild(aboutLink);
        linkContainer.appendChild(projectsLink);
        linkContainer.appendChild(contactLink);

        // Clear the current menu and add the new link container
        menu.innerHTML = ''; // Clear previous items (if any)
        menu.appendChild(linkContainer);
    } else {
        // If menu is not active, clear the menu
        menu.innerHTML = '';
    }
});
