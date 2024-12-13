document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(contactForm);
        const data = {
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Send data to the server
        fetch('https://your-server-endpoint.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Your message has been sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {  // Check if both elements exist
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();  // Prevent click from bubbling up
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Prevent menu from closing when clicking inside it
        navLinks.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});