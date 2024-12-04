let startX = 0;
let isSwiping = false;

// Add touch event listeners
carouselSlide.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

carouselSlide.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const moveX = e.touches[0].clientX - startX;

    // Optionally, you can show a dragging effect here
    carouselSlide.style.transform = `translateX(${moveX}px)`;
});

carouselSlide.addEventListener('touchend', (e) => {
    isSwiping = false;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    // Determine swipe direction and navigate
    if (deltaX > 50) {
        // Swipe right (previous image)
        moveToPrevious();
    } else if (deltaX < -50) {
        // Swipe left (next image)
        moveToNext();
    }

    // Reset transform
    carouselSlide.style.transform = '';
});

// Hide buttons on mobile
const isMobile = window.matchMedia('(max-width: 1100px)').matches;
if (isMobile) {
    document.querySelector('.carousel-button.left').style.display = 'none';
    document.querySelector('.carousel-button.right').style.display = 'none';
}
