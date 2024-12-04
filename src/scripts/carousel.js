// Select elements
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let direction = 'right';
// Disable transition for initial page load
carouselSlide.style.transition = 'none';

createDots();
updateCarouselPosition();

// Event listeners for buttons
leftButton.addEventListener('click', moveToPrevious);
rightButton.addEventListener('click', moveToNext);

// Create dots based on the number of images
function createDots() {
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarouselPosition();
            updateActiveDot();
        });
        dotsContainer.appendChild(dot);
    }
}

// Update active image and dots
function updateActiveImage() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}

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

// Navigate to the previous image
function moveToPrevious() {
    direction = 'left';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarouselPosition();
}

// Navigate to the next image
function moveToNext() {
    direction = 'right';
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselPosition();
}

// Update carousel position and active image logic
function updateCarouselPosition() {
    // Reset all images' classes
    images.forEach((img, index) => {
        img.classList.remove('prev', 'active', 'next');
        
        if (index === currentIndex) {
            img.classList.add('active'); // Set current image as active
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('prev'); // Set previous image
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('next'); // Set next image
        }
    });

    // Re-enable transition after initial setup
    setTimeout(() => {
        carouselSlide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'; // Re-enable transition
    }, 50);

    // Update active dot
    updateActiveDot();
}
