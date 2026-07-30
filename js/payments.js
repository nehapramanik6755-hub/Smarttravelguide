

document.addEventListener("DOMContentLoaded", function () {

    // Payment Options
    const paymentOptions = document.querySelectorAll(
        'input[name="paymentMethod"]'
    );

    const upiSection = document.getElementById("upiSection");
    const cardSection = document.getElementById("cardSection");
    const cashSection = document.getElementById("cashSection");

    // Hide all payment sections
    function hideAllSections() {
        upiSection.style.display = "none";
        cardSection.style.display = "none";
        cashSection.style.display = "none";
    }

    // Payment method selection
    paymentOptions.forEach(function (option) {

        option.addEventListener("change", function () {

            hideAllSections();

            if (this.value === "upi") {
                upiSection.style.display = "block";
            }

            else if (this.value === "card") {
                cardSection.style.display = "block";
            }

            else if (this.value === "cash") {
                cashSection.style.display = "block";
            }

        });

    });


    // Pay Now Button
    const payNowBtn = document.getElementById("payNowBtn");
    const paymentMessage = document.getElementById("paymentMessage");


    payNowBtn.addEventListener("click", async function () {

        const selectedPayment = document.querySelector(
            'input[name="paymentMethod"]:checked'
        );

        if (!selectedPayment) {

            paymentMessage.textContent =
                "Please select a payment method.";

            paymentMessage.style.color = "red";

            return;
        }









const bookingData =
        JSON.parse(localStorage.getItem("bookingData"));

    const customerName =
        bookingData.customerName;

    const customerEmail =
        bookingData.customerEmail;

    const totalAmount =
        bookingData.amount;

    console.log("Customer Name:", customerName);
    console.log("Customer Email:", customerEmail);


       




        try {

           

            const response = await fetch(
    "http://smart-production-1fe6.up.railway.app/api/payments",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            customerName: customerName,

             customerEmail: customerEmail,

            amount: Number(totalAmount),

            paymentMethod: selectedPayment.value,

            paymentStatus: "SUCCESS",

            paymentDate: new Date().toISOString()

        })
    }
);


            if (response.ok) {

                paymentMessage.textContent =
                    "Payment Successful! Booking Confirmed 🎉";

                paymentMessage.style.color = "green";

            } else {

                paymentMessage.textContent =
                    "Payment Failed!";

                paymentMessage.style.color = "red";

            }

        } catch (error) {

            console.error("Payment Error:", error);

            paymentMessage.textContent =
                "Server Error!";

            paymentMessage.style.color = "red";
        }

    });

});