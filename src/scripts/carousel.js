// Select elements
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dotsContainer = document.querySelector('.carousel-dots');

// Set initial position to 0 (first image)
let currentIndex = 0;

// Create dots based on the number of images
function createDots() {
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('div'); // Create div instead of span
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarouselPosition();
            updateActiveDot();
        });
        dotsContainer.appendChild(dot);
    }
}

// Function to update the visibility of the images
function updateCarouselPosition() {
    images.forEach((img, index) => {
        img.style.opacity = (index === currentIndex) ? 1 : 0; // Show current image, hide others
    });

    // Update the height of the carousel based on the current image's height
    const currentImage = images[currentIndex];
    document.querySelector('.image-carousel').style.height = `${currentImage.height}px`;

    updateActiveDot(); // Update active dot
}

// Update the active dot
function updateActiveDot() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Left button click event
leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Move to previous image
        updateCarouselPosition();
    }
});

// Right button click event
rightButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++; // Move to next image
        updateCarouselPosition();
    }
});

// Initialize the carousel
createDots();
updateCarouselPosition(); // Set the initial position and active dot






