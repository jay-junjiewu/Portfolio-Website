// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,  // Animation duration (in ms)
    easing: 'ease-in-out',  // Easing function for animations
    once: true,  // Trigger animation only once
});


// Hides header when scrolling down and reveals when scrolled all the way up
const header = document.querySelector('header'); // Select the header element
// Function to handle header visibility
function handleHeaderScroll() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches; // Check if the device is mobile

    if (isMobile) {
        if (window.scrollY === 0) {
            // At the top of the page
            header.classList.remove('hidden');
        } else {
            // Scrolled away from the top
            header.classList.add('hidden');
        }
    } else {
        // Ensure header is always visible in desktop mode
        header.classList.remove('hidden');
    }
}
// Add scroll listener
window.addEventListener('scroll', handleHeaderScroll);
// Run on initial load to set correct state
handleHeaderScroll();




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