
// ======================================
// 1. MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
}

// Close menu after clicking navigation
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
    });
});


// ======================================
// 2. TYPING ANIMATION
// ======================================

const typingElement = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ======================================
// 3. NAVBAR SCROLL EFFECT
// ======================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }

});


// ======================================
// 4. ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll("#navLinks a").forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});


// ======================================
// 5. CONTACT FORM - WHATSAPP
// ======================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const message = contactForm.querySelector(
        "textarea"
    ).value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields!");
        return;
    }

    // Replace with your WhatsApp number
    const phoneNumber = "923XXXXXXXXX";

    const whatsappMessage =
        `Hello, I am ${name}.
My Email: ${email}

Message: ${message}`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();

});


// ======================================
// 6. AUTOMATIC FOOTER YEAR
// ======================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ======================================
// 7. WEBSITE LOADED
// ======================================

window.addEventListener("load", () => {

    console.log("Ahsan's Portfolio Loaded Successfully!");

});
