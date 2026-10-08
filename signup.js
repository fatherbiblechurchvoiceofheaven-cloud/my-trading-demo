const signupForm = document.getElementById("signupForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const showPassword = document.getElementById("showPassword");
const showConfirmPassword = document.getElementById("showConfirmPassword");


// Show / hide password
showPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "Hide";
    } else {
        password.type = "password";
        showPassword.textContent = "Show";
    }
});


// Show / hide confirm password
showConfirmPassword.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        showConfirmPassword.textContent = "Hide";
    } else {
        confirmPassword.type = "password";
        showConfirmPassword.textContent = "Show";
    }
});


// Create account
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const userPassword = password.value;
    const confirm = confirmPassword.value;


    // Check password
    if (userPassword.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }


    // Check matching passwords
    if (userPassword !== confirm) {
        alert("Passwords do not match.");
        return;
    }


    // Check if username already exists
    const existingAccount = JSON.parse(
        localStorage.getItem("demoAccount")
    );

    if (
        existingAccount &&
        existingAccount.username.toLowerCase() === username.toLowerCase()
    ) {
        alert("That username is already registered. Please choose another.");
        return;
    }


    // Save demo account
    const account = {
        fullName: fullName,
        username: username,
        phone: phone,
        email: email,
        password: userPassword
    };

    localStorage.setItem(
        "demoAccount",
        JSON.stringify(account)
    );


    // Remember the username for the login page
    localStorage.setItem("savedUsername", username);


    alert("Account created successfully!");


    // Go to login
    window.location.href = "login.html";
});