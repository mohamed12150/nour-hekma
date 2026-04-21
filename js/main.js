// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Simple header scroll effect
const header = document.querySelector('.main-header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        if (!header.classList.contains('scrolled')) {
            header.classList.add('scrolled');
        }
    } else {
        if (header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
        }
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });
