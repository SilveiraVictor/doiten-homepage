const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const menuToggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

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

// --- MENU MOBILE ---
if (menuToggleBtn && navLinks) {
    const navAnchors = navLinks.querySelectorAll('a');

    const closeMenu = () => {
        navLinks.classList.remove('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        menuToggleBtn.setAttribute('aria-label', 'Abrir menu');
    };

    const openMenu = () => {
        navLinks.classList.add('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'true');
        menuToggleBtn.setAttribute('aria-label', 'Fechar menu');
    };

    menuToggleBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('is-open');
        if (isOpen) {
            closeMenu();
            return;
        }
        openMenu();
    });

    navAnchors.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}