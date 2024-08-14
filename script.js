document.addEventListener("DOMContentLoaded", function () {
    // Cursor Effect
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const icon = darkModeToggle.querySelector("i");
        if (body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust scroll position for fixed header
                behavior: "smooth"
            });
        });
    });

    // Scroll Reveal Animations
    ScrollReveal().reveal('.section-title', { delay: 200 });
    ScrollReveal().reveal('.service-card', { delay: 300 });
    ScrollReveal().reveal('.process-item', { delay: 400 });
    ScrollReveal().reveal('.contact-content', { delay: 500 });

    // GSAP Animations
    gsap.from(".hero-content", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero-image", { duration: 1, x: 50, opacity: 0 });
    gsap.from(".scroll-indicator", { duration: 1, delay: 1, y: 10, repeat: -1, yoyo: true });
});

// Dark Mode Styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        --primary-color: #333;
        --secondary-color: #555;
        --accent-color: #FF6584;
        --background-color: #111;
        --text-color: #eee;
    }
    .dark-mode .logo {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    .dark-mode .glass-nav {
        background: rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(darkModeStyles);
