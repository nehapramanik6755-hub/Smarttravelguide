// login.js

// function loginUser() {
    
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     // Simple validation
//     if (email === "" || password === "") {
//         alert("Please fill all fields");
//         return false;
//     }

    
//     let storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser) {
//         if (email === storedUser.email && password === storedUser.password) {
            
//             alert("Login Successful!");

            
//             localStorage.setItem("loggedInUser", email);

            
//             window.location.href = "index.html";
//         } else {
//             alert("Invalid email or password");
//         }
//     } else {
//         alert("No user found. Please register first.");
//     }

//     return false;
// }


async function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const loginData = {
        email: email,
        password: password
    };

    try {

        const response = await fetch(
            "http://localhost:9093/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(loginData)
            }
        );

        if (response.ok) {

            const user = await response.json();

            alert("Login Successful 🎉");

            // User data browser me save
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );

            window.location.href = "index.html";

        } else {

            alert("Invalid Email or Password");

        }

    } catch (error) {

        console.error(error);

        alert("Server Error");

    }
}