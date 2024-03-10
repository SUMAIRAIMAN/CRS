function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "jobs.html"; // Redirect to the jobs page
        return false; // Prevent form submission for this example
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
