// scripts.js

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (could be enhanced)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form after submission
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
