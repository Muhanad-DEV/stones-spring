// Bootstrap navbar functionality - using pure Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded on:', window.location.pathname);
    
    // Bootstrap handles all navbar functionality automatically
    // No custom JavaScript needed for dropdowns or mobile menu
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.content-overlay, .vision-mission-section, .choose-item');
    animatedElements.forEach(el => observer.observe(el));
});

// Preload images for better performance
function preloadImages() {
    const images = ['bc.png', '3.png', 'about-us-bc.png', 'vision-mission-bg.png'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Vision & Mission scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const visionSection = document.querySelector('.vision-mission-section');
    if (visionSection) {
        const visionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.2 });
        
        visionObserver.observe(visionSection);
    }
});

// Why Choose Us staggered animation
document.addEventListener('DOMContentLoaded', function() {
    const chooseItems = document.querySelectorAll('.choose-item');
    if (chooseItems.length > 0) {
        const chooseObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 200);
                }
            });
        }, { threshold: 0.1 });
        
        chooseItems.forEach(item => chooseObserver.observe(item));
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Any resize-specific functionality can go here
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});