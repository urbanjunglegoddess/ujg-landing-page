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

export default updateSkills;


