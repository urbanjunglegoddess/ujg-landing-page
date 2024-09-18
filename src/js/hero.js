const phrases = [
  'Welcome, I created this myself',
  'Karibu, nimeunda hii mwenyewe',
  '어서 오세요, 제가 직접 만들었습니다',
  'Bienvenue, je l\'ai créé moi-même',
  'Καλώς ήρθατε, το δημιούργησα μόνος μου'
];

let currentPhrase = 0;
let currentLetter = 0;
const welcomeText = document.getElementById('welcome-text');
let isDeleting = false;

function typeEffect() {
  const current = phrases[currentPhrase];

  // If deleting, remove one letter
  if (isDeleting) {
    welcomeText.innerText = current.substring(0, currentLetter--);
  }
  // If adding letters
  else {
    welcomeText.innerText = current.substring(0, currentLetter++);
  }

  // If the phrase is fully typed out
  if (!isDeleting && currentLetter === current.length) {
    setTimeout(() => isDeleting = true, 2000); // Wait before erasing
  }

  // If phrase is fully erased
  if (isDeleting && currentLetter === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length; // Move to next phrase
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed control
}

document.addEventListener('DOMContentLoaded', typeEffect);

export default typeEffect;


