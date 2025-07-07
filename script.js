document.addEventListener('DOMContentLoaded', function () {

    // ========== 1. Footer Year ==========
    document.getElementById('year').textContent = new Date().getFullYear();

    // ========== 2. Theme Toggle ==========
    const themeToggleBtn = document.getElementById('navThemeToggle');
    let isDark = true;

    function applyDarkTheme() {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f8f9fa';

        const navbar = document.querySelector('.navbar');
        navbar.style.backgroundColor = '#121212';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';

        // Update nav link colors
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = '#f8f9fa';
        });

        themeToggleBtn.textContent = '☀️';
        themeToggleBtn.style.color = '#f8f9fa';
    }

    function applyLightTheme() {
        document.body.style.backgroundColor = '#f8f9fa';
        document.body.style.color = '#212529';

        const navbar = document.querySelector('.navbar');
        navbar.style.backgroundColor = '#f8f9fa';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';

        // Update nav link colors
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = '#212529';
        });

        themeToggleBtn.textContent = '🌙';
        themeToggleBtn.style.color = '#212529';
    }

    function toggleTheme() {
        isDark = !isDark;
        isDark ? applyDarkTheme() : applyLightTheme();
    }

    applyDarkTheme(); // Set default theme
    themeToggleBtn.addEventListener('click', toggleTheme);

    // ========== 3. Responsive Navbar Toggle ==========
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ========== 4. Contact Form ==========
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // ========== 5. Scroll Animation ==========
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // ========== 6. Typing Text Animation ==========
    const strings = ["Web Developer", "UI/UX Design", "Problem Solving"];
    let i = 0, j = 0, currentString = strings[0], isDeleting = false;

    function typeEffect() {
        const typingElement = document.querySelector('.typing-text');
        typingElement.textContent = isDeleting
            ? currentString.substring(0, j--)
            : currentString.substring(0, j++);

        if (!isDeleting && j === currentString.length) isDeleting = true;
        else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % strings.length;
            currentString = strings[i];
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    setTimeout(typeEffect, 2000);

    // ========== 7. Scroll to Top Button ==========
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
