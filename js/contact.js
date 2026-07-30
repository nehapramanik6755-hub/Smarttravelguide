
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = {
        name: contactForm.querySelector('input[name="name"]').value,
        email: contactForm.querySelector('input[name="email"]').value,
        mobileNumber: contactForm.querySelector('input[name="mobileNumber"]').value,
        subject: contactForm.querySelector('input[name="subject"]').value,
        message: contactForm.querySelector('textarea[name="message"]').value
    };

    try {

        const response = await fetch("http://smart-production-1fe6.up.railway.app/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();

        if (response.ok) {
            document.getElementById("successMsg").textContent =
                "Message sent successfully!";

            contactForm.reset();
        } else {
            document.getElementById("successMsg").textContent =
                "Failed to send message.";
        }

    } catch (error) {

        console.error(error);

        document.getElementById("successMsg").textContent =
            "Server connection failed.";
    }
});