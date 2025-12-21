// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Expertise section interactivity
const expertiseCategories = document.querySelectorAll('.category');
const detailPanels = document.querySelectorAll('.detail-panel');

expertiseCategories.forEach(category => {
    category.addEventListener('click', () => {
        const targetCategory = category.getAttribute('data-category');
        
        // Remove active class from all categories and panels
        expertiseCategories.forEach(cat => cat.classList.remove('active'));
        detailPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked category and corresponding panel
        category.classList.add('active');
        document.getElementById(targetCategory).classList.add('active');
    });
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
const navDots = document.querySelectorAll('.nav-dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    navDots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    navDots[index].classList.add('active');
}

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Add loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        try {
            // Since this is a static site, we'll simulate the form submission
            // In a real implementation, you'd send to your backend API
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
            
            // Show success message
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Error:', error);
            showNotification('There was an error sending your message. Please try again.', 'error');
        } finally {
            // Always restore button state
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--background-card);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            padding: 1rem;
            max-width: 400px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            box-shadow: var(--shadow);
        }
        
        .notification-success {
            border-left: 4px solid var(--primary-color);
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-primary);
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            margin-left: auto;
            padding: 0.25rem;
        }
        
        .notification-close:hover {
            color: var(--text-primary);
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-card, .service-card, .expertise-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});