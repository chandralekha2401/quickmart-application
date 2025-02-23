document.addEventListener("DOMContentLoaded", function() {
document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

     // Prepare the form data to send to the server
        const formData = {
            name: name,
            email: email,
            message: message
        };
        alert("Your message has been submitted!");
        console.log("Form Data Submitted successfully", formData);
        document.getElementById("contactForm").reset(); // Reset the form
});
});