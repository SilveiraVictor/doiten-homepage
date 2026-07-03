const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// --- PRELOADER ---
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.querySelector('.hero').classList.add('active');
    }, 3500);
});

// --- SCROLL REVEAL ---
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});