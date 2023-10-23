// script.js

// Sample JavaScript code for the portfolio website

// Function to display a message when the page loads
function displayWelcomeMessage() {
    console.log("Welcome to my portfolio website!");
}

// Function to handle form submission
function handleSubmitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace the console logs with your desired functionality, e.g., sending an email or saving to a database.
    console.log("Form submitted by:");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
}

// Add an event listener to call displayWelcomeMessage when the page loads
document.addEventListener('DOMContentLoaded', displayWelcomeMessage);

// Add an event listener to the form submission
document.getElementById('contactForm').addEventListener('submit', handleSubmitForm);

