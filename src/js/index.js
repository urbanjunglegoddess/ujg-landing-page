import typeEffect from './hero.js';

document.addEventListener('DOMContentLoaded', typeEffect);

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



const skillsData = {
  'data-analyst': ['Excel/Google Sheets', 'SQL', 'R', 'Python', 'ETL', 'Tableau'],
  'front-end': ['HTML', 'CSS', 'JavaScript', 'React', 'Git/GitHub', 'Testing and Debugging', 'Component-Based Architecture'],
  'ux-ui': ['Storyboards', 'Figma', 'Wireframing', 'Prototyping', 'User-Centered Design'],
  'project-manager': ['Work Breakdown Structure (WBS)', 'Project Planning', 'SMART Goals', 'Resource Management', 'SWOT Analysis', 'Root Cause Analysis', 'Conflict Resolution']
};

let currentSkills = [];

function updateSkills(position) {
  const skillsContainer = document.getElementById('skills-container');

  // Animate the disappearance of current skills
  currentSkills.forEach(skill => {
    skill.classList.add('popOut');
  });

  // Clear out current skills after animation
  setTimeout(() => {
    skillsContainer.innerHTML = '';

    // Add new skills for the selected position
    skillsData[position].forEach(skill => {
      const skillBubble = document.createElement('div');
      skillBubble.classList.add('skill-bubble');
      skillBubble.textContent = skill;
      skillsContainer.appendChild(skillBubble);
      currentSkills.push(skillBubble);
    });
  }, 500); // Matches popOut animation duration
}

// Add event listeners for tab buttons
document.querySelectorAll('.position-tab').forEach(button => {
  button.addEventListener('click', function() {
    const position = this.getAttribute('data-position');
    updateSkills(position);
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Portfolio Tag Filtering
const tags = document.querySelectorAll('.portfolio-tag');
const projectCards = document.querySelectorAll('.project-card');

// Loop through tags and add event listeners
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Portfolio Tag Filtering
const tags = document.querySelectorAll('.portfolio-tag');
const projectCards = document.querySelectorAll('.project-card');

// Loop through tags and add event listeners
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const formSelection = document.getElementById("form-selection");
const generalForm = document.getElementById("general-form");
const projectForm = document.getElementById("project-form");
const collaborationForm = document.getElementById("collaboration-form");

formSelection.addEventListener("change", function() {
  // Hide all forms initially
  generalForm.classList.add("hidden");
  projectForm.classList.add("hidden");
  collaborationForm.classList.add("hidden");

  // Show the selected form
  if (formSelection.value === "general") {
    generalForm.classList.remove("hidden");
  } else if (formSelection.value === "project") {
    projectForm.classList.remove("hidden");
  } else if (formSelection.value === "collaboration") {
    collaborationForm.classList.remove("hidden");
  }
});


