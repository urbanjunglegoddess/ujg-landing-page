document.addEventListener("scroll", function () {
  const workEntries = document.querySelectorAll(".timeline-entry");

  workEntries.forEach((entry) => {
    const position = entry.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      entry.classList.add("fade-in");
    }
  });
});

export default