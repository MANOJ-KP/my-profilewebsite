// script.js

// Future enhancements:
// - Smooth scrolling
// - Navbar active state
// - Scroll animations

document.addEventListener("DOMContentLoaded", () => {
    console.log("Cloud Portfolio loaded successfully");
});
// Optional: project hover feedback
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        console.log("Viewing project:", card.querySelector("h3").innerText);
    });
});
// ========== CONTACT FORM VALIDATION ==========
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.style.color = "#F14A00";
        formStatus.innerText = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        formStatus.style.color = "#F14A00";
        formStatus.innerText = "Please enter a valid email address.";
        return;
    }

    // Fictional success message
    formStatus.style.color = "#00ffb3";
    formStatus.innerText = "Thank you! Your message has been sent successfully.";

    contactForm.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ========== ADVANCED SCROLL FUNCTIONALITY ========== */

// Navbar active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Initial trigger
revealOnScroll();
