let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto play the slider (uncomment the line below if needed)
// setInterval(nextSlide, 3000);
