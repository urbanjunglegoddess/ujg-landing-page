// Array of phrases in different languages to display in the hero section
const phrases = [
  'Welcome, I created this myself',
  'Karibu, nimeunda hii mwenyewe',
  '어서 오세요, 제가 직접 만들었습니다',
  'Bienvenue, je l\'ai créé moi-même',
  'Καλώς ήρθατε, το δημιούργησα μόνος μου'
];

// Variables to track which phrase and letter are currently being displayed
let currentPhrase = 0; // Start with the first phrase
let currentLetter = 0; // Start with the first letter of the current phrase

// Get the welcome text element from the HTML where the text will be typed
const welcomeText = document.getElementById('welcome-text');

// Boolean flag to indicate whether the current phrase is being deleted or typed
let isDeleting = false;

// Main function to handle the typing effect
function typeEffect() {
  // Get the current phrase based on the 'currentPhrase' index
  const current = phrases[currentPhrase];

  // If the phrase is being deleted, reduce the number of letters displayed
  if (isDeleting) {
    welcomeText.innerText = current.substring(0, currentLetter--); // Remove one letter
  } 
  // If the phrase is being typed out, increase the number of letters displayed
  else {
    welcomeText.innerText = current.substring(0, currentLetter++); // Add one letter
  }

  // If the entire phrase has been typed out
  if (!isDeleting && currentLetter === current.length) {
    setTimeout(() => isDeleting = true, 2000); // Wait 2 seconds before starting to delete
  }

  // If the entire phrase has been deleted
  if (isDeleting && currentLetter === 0) {
    isDeleting = false; // Switch back to typing mode
    currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase (loop back to the start if at the end)
  }

  // Set the speed for typing and deleting:
  // Typing speed is slower (100ms per letter), and deleting speed is faster (50ms per letter)
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Event listener to start the typeEffect function once the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', typeEffect);

typeEffect(); // Start the typing effect immediately