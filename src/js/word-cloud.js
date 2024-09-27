// import cloud from 'd3-cloud';
//
// const skillsData = {
//   'data-analyst': ['Excel/Google Sheets', 'SQL', 'R', 'Python', 'ETL', 'Tableau'],
//   'front-end': ['HTML', 'CSS', 'JavaScript', 'React', 'Git/GitHub', 'Testing and Debugging', 'Component-Based Architecture'],
//   'ux-ui': ['Storyboards', 'Figma', 'Wireframing', 'Prototyping', 'User-Centered Design'],
//   'project-manager': ['Work Breakdown Structure (WBS)', 'Project Planning', 'SMART Goals', 'Resource Management', 'SWOT Analysis', 'Root Cause Analysis', 'Conflict Resolution']
// };
//
// let currentSkills = [];
//
// function updateSkills(position) {
//   const skillsContainer = document.getElementById('skills-container');
//
//   // Animate the disappearance of current skills
//   currentSkills.forEach(skill => {
//     skill.classList.add('popOut');
//   });
//
//   // Clear out current skills after animation
//   setTimeout(() => {
//     skillsContainer.innerHTML = '';
//
//     // Add new skills for the selected position
//     skillsData[position].forEach(skill => {
//       const skillBubble = document.createElement('div');
//       skillBubble.classList.add('skill-bubble');
//       skillBubble.textContent = skill;
//       skillsContainer.appendChild(skillBubble);
//       currentSkills.push(skillBubble);
//     });
//   }, 500); // Matches popOut animation duration
// }
//
// // Add event listeners for tab buttons
// document.querySelectorAll('.position-tab').forEach(button => {
//   button.addEventListener('click', function() {
//     const position = this.getAttribute('data-position');
//     updateSkills(position);
//   });
// });
//
// export default updateSkills;
//
//

//////////////////////////////////////////////////////////////////////////////


  import cloud from 'd3-cloud';

// Define the skills data for different positions
const skillsData = {
  'data-analyst': ['Excel/Google Sheets', 'SQL', 'R', 'Python', 'ETL', 'Tableau'],
  'front-end': ['HTML', 'CSS', 'JavaScript', 'React', 'Git/GitHub', 'Testing and Debugging', 'Component-Based Architecture'],
  'ux-ui': ['Storyboards', 'Figma', 'Wireframing', 'Prototyping', 'User-Centered Design'],
  'project-manager': ['Work Breakdown Structure (WBS)', 'Project Planning', 'SMART Goals', 'Resource Management', 'SWOT Analysis', 'Root Cause Analysis', 'Conflict Resolution']
};

// Function to draw the word cloud
function drawWordCloud(words) {
  const width = 500; // Set the width of the word cloud
  const height = 500; // Set the height of the word cloud

  // Create a new cloud layout instance
  const layout = cloud()
    .size([width, height]) // Set the size of the layout
    .words(words.map(word => ({ text: word, size: 10 + Math.random() * 90 }))) // Map words to objects with text and random size
    .padding(5) // Set padding between words
    .rotate(() => ~~(Math.random() * 2) * 90) // Randomly rotate words by 0 or 90 degrees
    .font('Impact') // Set the font
    .fontSize(d => d.size) // Set the font size based on the word size
    .on('end', render); // Set the render function to call when layout is done

  layout.start(); // Start the layout calculation

  // Function to render the word cloud
  function render(words) {
    // Append an SVG element to the skills container
    const svg = d3.select('#skills-container').append('svg')
      .attr('width', width) // Set the width of the SVG
      .attr('height', height); // Set the height of the SVG

    // Append a group element to the SVG and center it
    const group = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Append text elements for each word
    group.selectAll('text')
      .data(words)
      .enter().append('text')
      .style('font-family', 'Impact') // Set the font family
      .style('font-size', d => `${d.size}px`) // Set the font size
      .style('fill', '#d5996b') // Set the fill color
      .attr('text-anchor', 'middle') // Center the text
      .attr('transform', d => `translate(${d.x},${d.y})rotate(${d.rotate})`) // Position and rotate the text
      .text(d => d.text); // Set the text content
  }
}

// Function to update the skills displayed based on the selected position
function updateSkills(position) {
  const skillsContainer = document.getElementById('skills-container');
  skillsContainer.innerHTML = ''; // Clear previous content

  const skills = skillsData[position]; // Get the skills for the selected position
  drawWordCloud(skills); // Draw the word cloud with the new skills
}

// Add event listeners for tab buttons
document.querySelectorAll('.position-tab').forEach(button => {
  button.addEventListener('click', function() {
    const position = this.getAttribute('data-position'); // Get the position from the button's data attribute
    updateSkills(position); // Update the skills displayed
  });
});

export default updateSkills;
