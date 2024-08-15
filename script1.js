document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const goToTopButton = document.getElementById('goToTop');
    const conMobButton = document.getElementById('but-mob-container');
    const windowSize = screen.width;
    console.log(windowSize);

    window.addEventListener('scroll', function() {
        if (windowSize < 468 && window.scrollY > 300) {
            conMobButton.style.display = 'block';
        } else {
            conMobButton.style.display = 'none';
        }
    });

    // Fixed Navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Go to Top Button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goToTopButton.style.display = 'flex';
        } else {
            goToTopButton.style.display = 'none';
        }
    });

    goToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });


    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial Carousel
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialItems = document.querySelectorAll('.testimonial-item');

    // Clone testimonial items for infinite scroll effect
    testimonialItems.forEach(item => {
        const clone = item.cloneNode(true);
        testimonialCarousel.appendChild(clone);
    });

    // Adjust carousel animation duration based on number of items
    const totalItems = testimonialCarousel.children.length;
    const animationDuration = totalItems * 10; // 10 seconds per item
    testimonialCarousel.style.animationDuration = `${animationDuration}s`;

    // Pause animation on hover
    testimonialCarousel.addEventListener('mouseenter', () => {
        testimonialCarousel.style.animationPlayState = 'paused';
    });

    testimonialCarousel.addEventListener('mouseleave', () => {
        testimonialCarousel.style.animationPlayState = 'running';
    });

 

    // Form Submission (you can replace this with your actual form submission logic)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Advanced Animations with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Start the carousel
    setInterval(showNextImage, 1500);
    
    // Animate footer sections
    gsap.utils.toArray('.footer-container > div').forEach((section, index) => {
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: '.footer',
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });
});