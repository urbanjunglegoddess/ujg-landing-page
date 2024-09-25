// // Get the welcome text element from the HTML where the text will be typed
// const welcomeText = document.getElementById('welcome-text');
//
// // Array of phrases in different languages to display in the hero section
// const phrases = [
//   'Welcome, I created this myself',
//   'Karibu, nimeunda hii mwenyewe',
//   '어서 오세요, 제가 직접 만들었습니다',
//   'Bienvenue, je l\'ai créé moi-même',
//   'Καλώς ήρθατε, το δημιούργησα μόνος μου'
// ];
//
// // Variables to track which phrase and letter are currently being displayed
// let currentPhrase = 0; // Start with the first phrase
// let currentLetter = 0; // Start with the first letter of the current phrase
//
//
// // Boolean flag to indicate whether the current phrase is being deleted or typed
// let isDeleting = false;
//
// const typingSpeed = 100;
// const delayBetweenPhrases = 2000;

// // Main function to handle the typing effect
// function typeEffect() {
//   // Get the current phrase based on the 'currentPhrase' index
//   const current = phrases[currentPhrase];
//
//   // If the phrase is being deleted, reduce the number of letters displayed
//   if (isDeleting) {
//     welcomeText.innerText = current.substring(0, currentLetter--); // Remove one letter
//   }
//   // If the phrase is being typed out, increase the number of letters displayed
//   else {
//     welcomeText.innerText = current.substring(0, currentLetter++); // Add one letter
//   }
//
//   // If the entire phrase has been typed out
//   if (!isDeleting && currentLetter === current.length) {
//     setTimeout(() => isDeleting = true, 2000); // Wait 2 seconds before starting to delete
//   }
//
//   // If the entire phrase has been deleted
//   if (isDeleting && currentLetter === 0) {
//     isDeleting = false; // Switch back to typing mode
//     currentPhrase = (currentPhrase + 1) % phrases.length; // Move to the next phrase (loop back to the start if at the end)
//   }
//
//   // Set the speed for typing and deleting:
//   // Typing speed is slower (100ms per letter), and deleting speed is faster (50ms per letter)
//   setTimeout(typeEffect, isDeleting ? 50 : 100);
// }
//
//
// typeEffect(phrases); // Start the typing effect immediately
//
// // Event listener to start the typeEffect function once the HTML content is fully loaded
// document.addEventListener('DOMContentLoaded', typeEffect);

//////////////////////////////////////////////////////////////////////////////////////////////

// function type() {
//   // Get the full text of the current phrase
//   const fullText = phrases[currentPhrase];
//
//   // If not deleting and the current letter index is within the phrase length
//   if (!isDeleting && currentLetter <= fullText.length) {
//     // Display the substring of the phrase up to the current letter index
//     welcomeText.innerHTML = fullText.slice(0, currentLetter++);
//   }
//   // If deleting and the current letter index is greater than 0
//   else if (isDeleting && currentLetter > 0) {
//     // Display the substring of the phrase up to the current letter index
//     welcomeText.innerHTML = fullText.slice(0, currentLetter--);
//   }
//   // If deleting and the current letter index is 0
//   else if (isDeleting && currentLetter === 0) {
//     // Switch to typing mode
//     isDeleting = false;
//     // Move to the next phrase, loop back to the start if at the end
//     currentPhrase = (currentPhrase + 1) % phrases.length;
//   }
//   // If the phrase has been fully typed out
//   else {
//     // Switch to deleting mode
//     isDeleting = true;
//     // Wait for a delay before starting to delete
//     setTimeout(type, delayBetweenPhrases);
//     return;
//   }
//
//   // Set the speed for typing and deleting
//   setTimeout(type, typingSpeed);
// }
//
// // Start the typing effect immediately
// type();
//
// // Export the type function as the default export
// export default type;
//////////////////////////////////////////////////////////////////////////////////////////////

// Array of phrases in different languages to display in the hero section
const phrases = [
    'Welcome, I created this myself',
    'Karibu, nimeunda hii mwenyewe',
    '어서 오세요, 제가 직접 만들었습니다',
    'Bienvenue, je l\'ai créé moi-même',
    'Καλώς ήρθατε, το δημιούργησα μόνος μου'
];

// // Get the element where the typing effect will be displayed
// const typingEffect = document.getElementById('typing-effect');

// Variables to track the current phrase and character being displayed
let phraseIndex = 0; // Start with the first phrase
let charIndex = 0; // Start with the first character of the current phrase

// Boolean flags to indicate whether the current phrase is being deleted or typed, and if the typing is paused
let isDeleting = false;
let isPaused = false;

// Main function to handle the typing effect
function type() {
    // Ensure the document object is available
    if (typeof document !== 'undefined') {
        const typingEffect = document.getElementById('typing-effect');
        if (typingEffect) {
            // Get the current phrase based on the 'phraseIndex'
            const currentPhrase = phrases[phraseIndex];

            // If the phrase is being deleted, reduce the number of characters displayed
            if (isDeleting) {
                typingEffect.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            }
            // If the phrase is being typed out, increase the number of characters displayed
            else {
                typingEffect.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            // If the entire phrase has been typed out
            if (!isDeleting && charIndex === currentPhrase.length) {
                isPaused = true; // Pause before starting to delete
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true; // Switch to deleting mode
                }, 20000); // Wait 20 seconds before starting to delete
            }
            // If the entire phrase has been deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false; // Switch back to typing mode
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase (loop back to the start if at the end)
            }

            // Set the speed for typing and deleting:
            // Typing speed is slower (100ms per character), and deleting speed is faster (50ms per character)
            const typingSpeed = isDeleting ? 50 : 100;
            if (!isPaused) {
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, 2000); // Pause duration before starting to delete
            }
        }
    }


    // Set the speed for typing and deleting:
    // Typing speed is slower (100ms per character), and deleting speed is faster (50ms per character)
    const typingSpeed = isDeleting ? 500 : 1000;
    if (!isPaused) {
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, 2000); // Pause duration before starting to delete
    }
}

// // Start the typing effect when the page loads
// document.addEventListener('DOMContentLoaded', type);

// Export the type function as the default export
export default type;
