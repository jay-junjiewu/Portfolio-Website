// Select elements
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let direction = 'right';

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

function updateCarouselPosition() {
    images.forEach((img, index) => {
        img.classList.remove('prev', 'active', 'next'); // Reset classes

        if (index === currentIndex) {
            img.classList.add('active'); // Current image
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('prev'); // Previous image
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('next'); // Next image
        }
    });
    updateActiveDot();
}

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
    // Circular navigation
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateCarouselPosition(); 
}

// Navigate to the next image
function moveToNext() {
    direction = 'right';
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarouselPosition(); 
}

// Event listeners for buttons
leftButton.addEventListener('click', moveToPrevious);
rightButton.addEventListener('click', moveToNext);


// Initialize the carousel initial position and active dot
createDots();
updateCarouselPosition();





