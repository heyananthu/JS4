document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "") {
            alert("Please enter your name.");
            return false;
        }

        if (email === "") {
            alert("Please enter your email.");
            return false;
        }

        if (message === "") {
            alert("Please enter a message.");
            return false;
        }

        form.submit();
    });
});
