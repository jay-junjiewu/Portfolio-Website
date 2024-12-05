// Select elements
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dotsContainer = document.querySelector('.carousel-dots');
const carouselWrapper = document.querySelector('.image-carousel');

let currentIndex = 0;
// Disable transition for initial page load
carouselSlide.style.transition = 'none';

createDots();
updateCarouselPosition();
adjustCarouselHeight();

leftButton.addEventListener('click', moveToPrevious);
rightButton.addEventListener('click', moveToNext);

window.addEventListener('resize', adjustCarouselHeight);
window.addEventListener('load', adjustCarouselHeight);


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

// Update active image and dots
function updateActiveImage() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}

// Navigate to the previous image
function moveToPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarouselPosition();
}

// Navigate to the next image
function moveToNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    // Reset all images' classes
    images.forEach((img) => {
        img.classList.remove('prev', 'active', 'next');
    });

    if (images.length === 2) {
        // Special handling for 2 images
        images[currentIndex].classList.add('active');
        images[(currentIndex + 1) % images.length].classList.add('prev');
    } else {
        // General case for 3 or more images
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active'); // Set current image as active
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
                img.classList.add('prev'); // Set previous image
            } else if (index === (currentIndex + 1) % images.length) {
                img.classList.add('next'); // Set next image
            }
        });
    }

    updateActiveDot();
}


// Function to dynamically adjust the height of the carousel
function adjustCarouselHeight() {
    // Get the current image
    const activeImage = images[0]; // assuming the first image is active for now

    // Calculate the height based on the image's natural dimensions
    const aspectRatio = activeImage.naturalWidth / activeImage.naturalHeight;
    const newHeight = carouselWrapper.clientWidth / aspectRatio;

    carouselWrapper.style.height = `${newHeight}px`;
}

