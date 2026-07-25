// register.js

// function registerUser() {
    
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmPassword = document.getElementById("confirmPassword").value;

    
//     if (name === "" || email === "" || password === "" || confirmPassword === "") {
//         alert("Please fill all fields");
//         return false;
//     }

//     if (password !== confirmPassword) {
//         alert("Password and Confirm Password do not match");
//         return false;
//     }

    
//     let user = {
//         name: name,
//         email: email,
//         password: password
//     };

    
//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Registration Successful!");

    
//     window.location.href = "login.html";

//     return false;
// }

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

    fetch("http://localhost:9093/api/auth/register", {
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