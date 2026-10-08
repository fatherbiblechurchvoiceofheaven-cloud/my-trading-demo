const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

// Show / hide password
if (showPassword) {
    showPassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPassword.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            showPassword.textContent = "Show";
        }
    });
}

// Put previously used username into the login box
const savedUsername = localStorage.getItem("savedUsername");

if (savedUsername) {
    usernameInput.value = savedUsername;
}

// Login
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Get registered account
    const savedAccount = JSON.parse(
        localStorage.getItem("demoAccount")
    );

    // No registered account
    if (!savedAccount) {
        alert("No account found. Please create an account first.");
        return;
    }

    // Check username and password
    if (
        username.toLowerCase() === savedAccount.username.toLowerCase() &&
        password === savedAccount.password
    ) {
        // Remember username
        localStorage.setItem("savedUsername", savedAccount.username);

        // Remember that this user is logged in
        localStorage.setItem("demoLoggedIn", "true");

        // Go to dashboard
        window.location.href = "index.html";

    } else {
        alert("Incorrect username or password.");
    }
});