import type from './typing-effect.js';

document.addEventListener('DOMContentLoaded', type);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Active section highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('#side-nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add subtle animations for elements
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section > *').forEach(el => {
    observer.observe(el);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Collapsible side navigation
const toggleNav = document.getElementById('toggle-nav');
const sideNav = document.getElementById('side-nav');
const main = document.querySelector('main');

toggleNav.addEventListener('click', () => {
    sideNav.classList.toggle('collapsed');
    main.classList.toggle('expanded');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Floating leaves animation
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 5000);
}

setInterval(createLeaf, 300);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array of phrases in different languages to display in the hero section
const phrases = [
    'Welcome, I created this myself',
    'Karibu, nimeunda hii mwenyewe',
    '어서 오세요, 제가 직접 만들었습니다',
    'Bienvenue, je l\'ai créé moi-même',
    'Καλώς ήρθατε, το δημιούργησα μόνος μου'
];

// Get the element where the typing effect will be displayed
const typingEffect = document.getElementById('typing-effect');

// Variables to track the current phrase and character being displayed
let phraseIndex = 0; // Start with the first phrase
let charIndex = 0; // Start with the first character of the current phrase

// Boolean flags to indicate whether the current phrase is being deleted or typed, and if the typing is paused
let isDeleting = false;
let isPaused = false;

// Main function to handle the typing effect
function type() {
    // Get the current phrase based on the 'phraseIndex'
    const currentPhrase = phrases[phraseIndex];

    // If the phrase is being deleted, reduce the number of characters displayed
    if (isDeleting) {
        typingEffect.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    }
    // If the phrase is being typed out, increase the number of characters displayed
    else {
        typingEffect.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // If the entire phrase has been typed out
    if (!isDeleting && charIndex === currentPhrase.length) {
        isPaused = true; // Pause before starting to delete
        setTimeout(() => {
            isPaused = false;
            isDeleting = true; // Switch to deleting mode
        }, 2000); // Wait 2 seconds before starting to delete
    }
    // If the entire phrase has been deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Switch back to typing mode
        phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase (loop back to the start if at the end)
    }

    // Set the speed for typing and deleting:
    // Typing speed is slower (100ms per character), and deleting speed is faster (50ms per character)
    const typingSpeed = isDeleting ? 50 : 100;
    if (!isPaused) {
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, 2000); // Pause duration before starting to delete
    }
}

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', type);