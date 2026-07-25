// profile.js

window.onload = function () {
    loadProfile();
};

// Profile data load karna
function loadProfile() {
    let user = JSON.parse(localStorage.getItem("user"));
    let loggedInUser = localStorage.getItem("loggedInUser");

    let profileBox = document.getElementById("profileBox");

    if (!loggedInUser || !user) {
        profileBox.innerHTML = "<h3>No user logged in</h3>";
        return;
    }

    profileBox.innerHTML = `
        <h2>Welcome, ${user.name}</h2>
        <p><b>Email:</b> ${user.email}</p>
    `;
}

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}