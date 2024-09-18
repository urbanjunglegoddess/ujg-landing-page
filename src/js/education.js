// Education Section Tabs Functionality
const tabs = document.querySelectorAll('.education-tab');
const educationContent = document.querySelectorAll('.education-content');

// Loop through tabs and add event listeners
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        educationContent.forEach(content => content.classList.remove('active'));

        // Add 'active' class to clicked tab and corresponding content
        tab.classList.add('active');
        educationContent[index].classList.add('active');
    });
});

// Hover Functionality for Certificate Button
const certButtons = document.querySelectorAll('.certificate-btn');
const certPopups = document.querySelectorAll('.certificate-popup');

certButtons.forEach((button, index) => {
    button.addEventListener('mouseover', () => {
        certPopups[index].classList.add('show');
    });
    button.addEventListener('mouseout', () => {
        certPopups[index].classList.remove('show');
    });
});
export { tabs, educationContent, certButtons, certPopups };
