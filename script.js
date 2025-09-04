// Bootstrap navbar functionality - simplified
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded on:', window.location.pathname);
    
    // Handle mobile menu toggle manually
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Close menu
                navbarCollapse.classList.remove('show');
                this.setAttribute('aria-expanded', 'false');
            } else {
                // Open menu
                navbarCollapse.classList.add('show');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    }
    
    // Handle dropdown toggles manually
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.closest('.dropdown');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (dropdownMenu) {
                const isOpen = dropdownMenu.classList.contains('show');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
                
                // Toggle current dropdown
                if (!isOpen) {
                    dropdownMenu.classList.add('show');
                }
            }
        });
    });
    
    // Handle navigation links - close mobile menu when clicking
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if it's open
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                if (navbarToggler) {
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
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