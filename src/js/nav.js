// Collapsible side navigation
const toggleNav = document.getElementById('toggle-nav');
const sideNav = document.getElementById('side-nav');
const main = document.querySelector('main');

toggleNav.addEventListener('click', () => {
    sideNav.classList.toggle('collapsed');
    main.classList.toggle('expanded');
});

// Close the side navigation when the main content is clicked
main.addEventListener('click', () => {
    sideNav.classList.add('collapsed');
    main.classList.remove('expanded');
});

// Close the side navigation when the 'ESC' key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        sideNav.classList.add('collapsed');
        main.classList.remove('expanded');
    }
});

// Close the side navigation when a link is clicked
sideNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        sideNav.classList.add('collapsed');
        main.classList.remove('expanded');
    }
});

// Close the side navigation when the window is resized
window.addEventListener('resize', () => {
    sideNav.classList.add('collapsed');
    main.classList.remove('expanded');
});

// Close the side navigation when the window is scrolled

window.addEventListener('scroll', () => {
    sideNav.classList.add('collapsed');
    main.classList.remove('expanded')
});

// Close the side navigation when the window is scrolled
window.addEventListener('scroll', () => {
    sideNav.classList.add('collapsed');
    main.classList.remove('expanded');
});

