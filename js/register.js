

function registerUser(event) {

    event.preventDefault();

    const fullName =
        document.getElementById("fullName").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (
        fullName === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    const user = {
        fullName: fullName,
        email: email,
        phone: phone,
        password: password
    };

    fetch("https://smart-travelguide-backend.up.railway.app/api/auth/register", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    })
    .then(response => {

        if (!response.ok) {
            throw new Error("Registration failed");
        }

        return response.json();
    })
    .then(data => {

        alert("Registration Successful!");

        window.location.href = "login.html";
    })
    .catch(error => {

        console.error("Error:", error);

        alert("Registration failed!");
    });
}