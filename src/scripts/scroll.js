// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,  // Animation duration (in ms)
    easing: 'ease-in-out',  // Easing function for animations
    once: true,  // Trigger animation only once
});

window.addEventListener('scroll', handleHeaderScroll);
// Run on initial load to set the correct state
handleHeaderScroll();


// Scrolling hides the header in mobile
function handleHeaderScroll() {
    const header = document.querySelector('header'); 
    const menu = document.getElementById('menu');
    const isMobile = window.matchMedia('(max-width: 1100px)').matches;
    const isMainPage = window.location.pathname.endsWith('index.html');

    if (isMobile) {
        if (window.scrollY === 0) {
            // At the top of the page, reveal header
            header.classList.remove('hidden');
        } else {
            // Scrolled away from the top, hide header
            header.classList.add('hidden');
        }

        // If menu is open and user scrolls down, close the menu
        if (isMainPage){
            if (menu.classList.contains('active') && window.scrollY > 0) {
                menu.classList.remove('active');

            } else {
                header.classList.remove('hidden');
            }
        }
    }
} 

