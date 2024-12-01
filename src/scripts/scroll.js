// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,  // Animation duration (in ms)
    easing: 'ease-in-out',  // Easing function for animations
    once: true,  // Trigger animation only once
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