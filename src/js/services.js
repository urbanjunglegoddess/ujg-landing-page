let currentServiceSlide = 0;
const serviceSlides = document.querySelectorAll('.service-slide');

function showServiceSlide(index) {
    serviceSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });
    serviceSlides[index].style.display = 'block';
    serviceSlides[index].classList.add('active');
}

document.querySelector('.prev-service-btn').addEventListener('click', () => {
    currentServiceSlide = (currentServiceSlide === 0) ? serviceSlides.length - 1 : currentServiceSlide - 1;
    showServiceSlide(currentServiceSlide);
});

document.querySelector('.next-service-btn').addEventListener('click', () => {
    currentServiceSlide = (currentServiceSlide === serviceSlides.length - 1) ? 0 : currentServiceSlide + 1;
    showServiceSlide(currentServiceSlide);
});

// Show the first service slide by default
showServiceSlide(currentServiceSlide);

export { showServiceSlide };

document.addEventListener('DOMContentLoaded', function() {
  const serviceBoxes = document.querySelectorAll('.service-box');

  function checkScrollPosition() {
    const triggerPoint = window.innerHeight / 1.2; // Adjust this for when you want the animation to trigger

    serviceBoxes.forEach((box, index) => {
      const boxPosition = box.getBoundingClientRect().top;
      if (boxPosition < triggerPoint) {
        setTimeout(() => {
          box.classList.add('active');
        }, index * 200); // Adds staggered effect
      }
    });
  }

  window.addEventListener('scroll', checkScrollPosition);
});

