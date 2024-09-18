// Portfolio Tag Filtering
const tags = document.querySelectorAll('.portfolio-tag');
const projectCards = document.querySelectorAll('.project-card');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filter = tag.getAttribute('data-filter');

        // Remove 'active' class from all tags
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        // Filter project cards based on selected tag
        projectCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block'; // Show matching cards
                setTimeout(() => card.classList.add('show'), 100); // Add smooth transition
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });
    });
});

export { tags, projectCards };

