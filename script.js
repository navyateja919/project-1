// document.addEventListener("DOMContentLoaded", function () {
//     // Cursor Effect
//     const cursor = document.querySelector(".cursor");
//     const follower = document.querySelector(".cursor-follower");

//     document.addEventListener("mousemove", function (e) {
//         cursor.style.left = e.clientX + "px";
//         cursor.style.top = e.clientY + "px";
//         follower.style.left = e.clientX + "px";
//         follower.style.top = e.clientY + "px";
//     });

//     // Scroll Reveal Animations
//     ScrollReveal().reveal('.section-title', { delay: 200 });
//     ScrollReveal().reveal('.service-card', { delay: 300 });
//     ScrollReveal().reveal('.process-item', { delay: 400 });
//     ScrollReveal().reveal('.contact-content', { delay: 500 });

//     // GSAP Animations
//     gsap.from(".hero-content", { duration: 1, y: -50, opacity: 0 });
//     gsap.from(".hero-image", { duration: 1, x: 50, opacity: 0 });
//     gsap.from(".scroll-indicator", { duration: 1, delay: 1, y: 10, repeat: -1, yoyo: true });
// });