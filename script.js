document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('.section');
    const sectionsContainer = document.querySelector('.sections-container');
    
    // Intersection Observer for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update active section
                const activeSection = entry.target;
                const sectionId = activeSection.id;
                
                // Update active dot
                dots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.getAttribute('data-section') === sectionId) {
                        dot.classList.add('active');
                    }
                });
                
                // Update section visibility
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                activeSection.classList.add('active');
            }
        });
    }, {
        threshold: 0.5,
        root: sectionsContainer
    });
    
    // Observe all sections
    sections.forEach(section => observer.observe(section));
    
    // Smooth scroll when clicking dots
    dots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle navbar links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});