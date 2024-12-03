// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,  // Animation duration (in ms)
    easing: 'ease-in-out',  // Easing function for animations
    once: true,  // Trigger animation only once
});

// Scrolling hides the header in mobile
const header = document.querySelector('header'); 
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');
// Function to handle header visibility
function handleHeaderScroll() {
    const isMobile = window.matchMedia('(max-width: 1100px)').matches;

    if (isMobile) {
        if (window.scrollY === 0) {
            // At the top of the page, reveal header
            header.classList.remove('hidden');
        } else {
            // Scrolled away from the top, hide header
            header.classList.add('hidden');
        }

        // If menu is open and user scrolls down, close the menu
        if (menu.classList.contains('active') && window.scrollY > 0) {
            menu.classList.remove('active');
        }
    } else {
        // Ensure the header is always visible in desktop mode
        header.classList.remove('hidden');
    }
}
// Add scroll listener
window.addEventListener('scroll', handleHeaderScroll);
// Run on initial load to set the correct state
handleHeaderScroll();



// Dropdown menu for mobile mode
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    
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








/*
// Smooth scrolling for project containers
containers.forEach(container => {
    container.addEventListener('wheel', (event) => {
        event.preventDefault();

        // Adjust the speed multiplier
        const scrollSpeed = 0.5;  
        const scrollAmount = event.deltaY * scrollSpeed;
        const containerHeight = container.offsetHeight;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;

        container.scrollBy({
            top: scrollAmount,
            behavior: 'auto'
        });

        if (event.deltaY > 0) {
            const isAtBottom = scrollTop + containerHeight >= scrollHeight - 1;
            if (isAtBottom) {
                setTimeout(() => {
                    const nextSection = container.closest('section').nextElementSibling;
                    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                }, 200);
            }
        } else if (event.deltaY < 0) {
            const isAtTop = scrollTop <= 0;
            if (isAtTop) {
                setTimeout(() => {
                    const previousSection = container.closest('section').previousElementSibling;
                    if (previousSection) previousSection.scrollIntoView({ behavior: 'smooth' });
                }, 200);
            }
        }
    });
});

*/