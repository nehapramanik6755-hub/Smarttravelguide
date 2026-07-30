
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
            "http://smart-production-1fe6.up.railway.app/api/auth/login",
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