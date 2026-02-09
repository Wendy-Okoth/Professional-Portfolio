const titles = [
    "Software Developer",
    "Tech Enthusiast",
    "Aspiring Accountant"
];

let titleIndex = 0;
// Target the tagline in the navbar
const taglineElement = document.querySelector('#nav-tagline');
const typingSpeed = 100; 
const pauseTime = 1500; 
const loopDelay = 500; 

function type() {
    if (!taglineElement) return;
    const currentTitle = titles[titleIndex];
    let charIndex = 0;

    function typeChar() {
        if (charIndex < currentTitle.length) {
            taglineElement.textContent += currentTitle.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            setTimeout(deleteChar, pauseTime);
        }
    }

    function deleteChar() {
        if (taglineElement.textContent.length > 0) {
            taglineElement.textContent = taglineElement.textContent.slice(0, -1);
            setTimeout(deleteChar, typingSpeed / 2);
        } else {
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, loopDelay);
        }
    }

    typeChar();
}

document.addEventListener('DOMContentLoaded', () => {
    // Start Typewriter
    if(taglineElement) {
        taglineElement.textContent = ''; 
        type();
    }

    // Smooth Scroll
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message, Wendy will get back to you soon!');
            contactForm.reset();
        });
    }
});