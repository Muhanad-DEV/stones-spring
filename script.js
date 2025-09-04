// Mobile Menu Toggle Functionality - Simplified and Fixed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded on:', window.location.pathname);
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navigation = document.querySelector('.navigation');
    const body = document.body;
    
    console.log('Mobile menu toggle found:', !!mobileMenuToggle);
    console.log('Navigation found:', !!navigation);
    
    if (!mobileMenuToggle || !navigation) {
        console.error('Mobile menu elements not found!');
        return;
    }
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Hamburger clicked');
        
        const isActive = navigation.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    function openMobileMenu() {
        console.log('Opening mobile menu');
        navigation.classList.add('active');
        mobileMenuToggle.classList.add('active');
        body.classList.add('menu-open');
    }
    
    function closeMobileMenu() {
        console.log('Closing mobile menu');
        navigation.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Close all dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    }
    
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const isDropdownChild = this.classList.contains('dropdown-link');
            const isDropdownParent = this.getAttribute('href') === '#';
            
            console.log('Link clicked:', this.textContent, 'isDropdownChild:', isDropdownChild, 'isDropdownParent:', isDropdownParent);
            
            if (isDropdownChild) {
                // This is a dropdown child link - close menu and navigate
                console.log('Closing menu for dropdown child');
                closeMobileMenu();
            } else if (isDropdownParent) {
                // This is a dropdown parent - prevent default and toggle dropdown
                e.preventDefault();
                console.log('Toggling dropdown');
                toggleDropdown(this);
            } else {
                // This is a regular page link - close menu and navigate
                console.log('Closing menu for regular link');
                closeMobileMenu();
            }
        });
    });
    
    function toggleDropdown(link) {
        const dropdown = link.closest('.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Close other dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdownMenu.classList.toggle('active');
        console.log('Dropdown toggled:', dropdownMenu.classList.contains('active'));
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navigation.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu on window resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Ensure mobile menu is visible on mobile devices
    if (window.innerWidth <= 768) {
        mobileMenuToggle.style.display = 'flex';
        console.log('Mobile menu toggle made visible');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
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
    const animatedElements = document.querySelectorAll('.content-overlay, .nav-item, .vision-mission-section');
    animatedElements.forEach(el => observer.observe(el));
});

// Enhanced dropdown functionality for desktop
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop hover functionality
        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', function() {
                menu.classList.add('active');
            });
            
            dropdown.addEventListener('mouseleave', function() {
                menu.classList.remove('active');
            });
        }
        
        // Close other dropdowns when opening a new one (desktop only)
        link.addEventListener('click', function(e) {
            if (window.innerWidth > 768) {
                document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('active');
                    }
                });
            }
        });
    });
});

// Preload images for better performance
function preloadImages() {
    const images = ['bc.png', '3.png', 'about-us-bc.png', 'vision-mission-bg.png'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Debug function to test mobile menu
function testMobileMenu() {
    console.log('=== MOBILE MENU TEST ===');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.navigation');
    const body = document.body;
    
    if (toggle && nav) {
        console.log('✓ Elements found');
        console.log('Toggle display:', window.getComputedStyle(toggle).display);
        console.log('Navigation display:', window.getComputedStyle(nav).display);
        console.log('Body classes:', body.className);
        console.log('Window width:', window.innerWidth);
        
        // Test click
        console.log('Testing click...');
        toggle.click();
        
        setTimeout(() => {
            const isActive = nav.classList.contains('active');
            console.log('Menu active after click:', isActive);
            if (isActive) {
                toggle.click(); // Close it
                console.log('Menu closed');
            }
        }, 500);
        
        return true;
    } else {
        console.log('✗ Elements not found');
        return false;
    }
}

// Reveal animation for Why Choose Us timeline
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.choose-item');
        if (!items.length) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        items.forEach(el => io.observe(el));
    });
})();


// Make test function available globally
window.testMobileMenu = testMobileMenu;