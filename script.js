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
});