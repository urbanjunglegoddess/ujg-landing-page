import type from './typing-effect.js';

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM fully loaded and parsed');
        type();
    });

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
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
