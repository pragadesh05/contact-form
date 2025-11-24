// This script should be placed inside the <script> tags in the HTML file above.

function validateForm() {
    // 1. Get the values and error message elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Assume the form is valid until proven otherwise
    let isValid = true;

    // Reset previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // --- 2. Validation Checks ---

    // 2.1. Name Validation (Required and minimum length)
    if (name === "") {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
        isValid = false;
    }

    // 2.2. Email Validation (Required and format)
    if (email === "") {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else {
        // Simple regex for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }
    }

    // 2.3. Message Validation (Required and minimum length)
    if (message === "") {
        messageError.textContent = 'Message is required.';
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    // --- 3. Return Result ---

    // If isValid is false, the form submission is prevented.
    if (!isValid) {
        // Prevent form submission
        return false;
    } else {
        // Optional: Perform AJAX submission here instead of a traditional submit
        alert('Form submitted successfully! (If this were a real application, data would now be sent to a server.)');
        // Prevent traditional form submission after successful client-side validation
        // return false to stop the form from trying to navigate away (if it doesn't have an action)
        // or return true to allow the form to submit to the 'action' URL.
        // For demonstration, we'll prevent submission after the alert:
        return false; 
    }
}