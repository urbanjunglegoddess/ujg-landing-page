// Tab Switching Logic
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and tab contents
        tabLinks.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and the associated content
        tab.classList.add('active');
        const institutionId = tab.getAttribute('data-institution');
        document.getElementById(institutionId).classList.add('active');
    });
});

// Certificate Hover Logic
const certificateButtons = document.querySelectorAll('.hover-cert');

certificateButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        const popup = button.nextElementSibling;
        popup.style.display = 'block';
    });

    button.addEventListener('mouseout', () => {
        const popup = button.nextElementSibling;
        popup.style.display = 'none';
    });
});

export { tabLinks, tabContents, certificateButtons };
