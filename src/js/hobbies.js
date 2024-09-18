let currentSlide = 0;
const slides = document.querySelectorAll('.hobby-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    slides[index].classList.add('active');
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Show the first slide by default
showSlide(currentSlide);

export default showSlide;
