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

export { createLeaf };
