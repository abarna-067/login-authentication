// Register Function
function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        localStorage.setItem(username, password); // Store user credentials
        alert('Registration successful! Please log in with your College ID.');
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
    } else {
        alert('Please enter both College ID and Password.');
    }
}

// Login Function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username); // Retrieve stored password

    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
        showSecuredPage(username);
    } else {
        alert('Invalid College ID or Password.');
    }
}

// Show Secured Page
function showSecuredPage(username) {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('securedPage').style.display = 'block';
    document.getElementById('studentID').textContent = username; // Display College ID
}

// Logout Function
function logout() {
    document.getElementById('auth').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
    alert('Logged out successfully!');
}
