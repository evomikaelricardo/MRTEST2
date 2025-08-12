(function() {
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show sending status
            formStatus.style.display = 'block';
            formStatus.className = 'form-status loading';
            formStatus.textContent = 'Sending message...';
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
                
            } catch (error) {
                console.error('Contact form error:', error);
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Error sending message. Please try again.';
            }
            
            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Skip empty anchors and dropdown triggers
            if (href === '#' || href.length <= 1) {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Dropdown menu toggle for Solutions
    const dropdownTrigger = document.querySelector('[data-testid="nav-solutions"]');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownTrigger && dropdown && dropdownMenu) {
        // Prevent default link behavior and toggle dropdown on click
        dropdownTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('dropdown-active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('dropdown-active');
            }
        });
        
        // Close dropdown when clicking on menu items
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                dropdown.classList.remove('dropdown-active');
            });
        });
    }

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('mobile-active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('mobile-active');
            }
        });
        
        // Close mobile menu when clicking on a nav link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-active');
            });
        });
    }
})();
