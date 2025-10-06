// Array of titles to cycle through
const titles = [
    "Software Developer",
    "Tech Enthusiast",
    "Aspiring Accountant"
];

let titleIndex = 0;
const taglineElement = document.querySelector('#home .tagline');
const typingSpeed = 100; // Speed of typing in milliseconds
const pauseTime = 1500; // Time to pause after typing (1.5 seconds)
const loopDelay = 500; // Time to pause after deleting before next word starts

/**
 * Typewriter Effect Function
 */
function type() {
    // Get the current title and the character index within that title
    const currentTitle = titles[titleIndex];
    let charIndex = 0;

    // Function to handle the typing of characters
    function typeChar() {
        if (charIndex < currentTitle.length) {
            taglineElement.textContent += currentTitle.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            // Wait after typing, then start deleting
            setTimeout(deleteChar, pauseTime);
        }
    }

    // Function to handle the deleting of characters
    function deleteChar() {
        if (taglineElement.textContent.length > 0) {
            taglineElement.textContent = taglineElement.textContent.slice(0, -1);
            setTimeout(deleteChar, typingSpeed / 2); // Deletes faster than it types
        } else {
            // 1. Move to the next title in the array (looping back to 0 if at the end)
            titleIndex = (titleIndex + 1) % titles.length;
            
            // 2. 💡 CRITICAL FIX: Call the main 'type' function after a brief delay
            //    to start the next word's typing cycle cleanly.
            setTimeout(type, loopDelay);
        }
    }

    // Start the typing process
    typeChar();
}

// Start the title cycling when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Clear the initial placeholder text in HTML
    taglineElement.textContent = ''; 
    type();
});


// ----------------------------------------------------
// Existing Functionality (Smooth Scroll & Header Scroll)
// ----------------------------------------------------

// 1. Smooth Scroll for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Contact Form Submission (Basic Example)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would use a service like Formspree or a backend
    console.log('Form Submitted!');

    // Simple confirmation message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// 3. Header Scroll Effect 
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Add a class to apply a new background/shadow
    } else {
        header.classList.remove('scrolled');
    }
});