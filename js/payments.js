// =======================================
// Read URL Parameters
// =======================================

// const params = new URLSearchParams(window.location.search);

// const type = params.get("type");
// const item = params.get("item");
// const qty = Number(params.get("qty")) || 1;



// let bookingData = null;

// switch (type) {

//     case "hotel":
//         bookingData = hotels[item];
//         break;

//     case "vehicle":
//         bookingData = vehicles[item];
//         break;

//     case "guide":
//         bookingData = guides[item];
//         break;

//     case "place":
//         bookingData = places[item];
//         break;
// }



// if (bookingData) {

//     document.getElementById("serviceName").textContent =
//         bookingData.name;

//     document.getElementById("serviceState").textContent =
//         bookingData.state;

//     document.getElementById("serviceType").textContent =
//         bookingData.type;

//     document.getElementById("serviceQuantity").textContent =
//         qty;

//     document.getElementById("servicePrice").textContent =
//         "₹" + bookingData.price.toLocaleString("en-IN");

//     const total = bookingData.price * qty;

//     document.getElementById("totalAmount").textContent =
//         "₹" + total.toLocaleString("en-IN");

// }
// else{

//     alert("Booking Summary Not Found!");

// }



// const payBtn = document.getElementById("payNow");

// payBtn.addEventListener("click", function (e) {

//     e.preventDefault();

//     const paymentMethod = document.querySelector(
//         'input[name="paymentMethod"]:checked'
//     );

//     if (!paymentMethod) {
//         alert("Please select a payment method.");
//         return;
//     }

    
//     const bookingId = "TI" + Date.now();

//     alert(
//         "Payment Successful!\n\n" +
//         "Booking ID : " + bookingId +
//         "\nService : " + bookingData.name +
//         "\nTotal : ₹" + (bookingData.price * qty)
//     );

    
//     localStorage.setItem("bookingId", bookingId);
//     localStorage.setItem("serviceName", bookingData.name);
//     localStorage.setItem("serviceType", bookingData.type);
//     localStorage.setItem("serviceState", bookingData.state);
//     localStorage.setItem("quantity", qty);
//     localStorage.setItem("totalAmount", bookingData.price * qty);

    
//     window.location.href = "success.html";

// });









// =====================================
// READ URL PARAMETERS
// =====================================

// const paymentParams =
//     new URLSearchParams(window.location.search);

// const type =
//     paymentParams.get("type");

// const item =
//     paymentParams.get("item");

// const quantity =
//     Number(paymentParams.get("qty")) || 1;

// const total =
//     Number(paymentParams.get("total")) || 0;




// let bookingData = null;

// switch (type) {

//     case "hotel":
//         bookingData = hotels[item];
//         break;

//     case "vehicle":
//         bookingData = vehicles[item];
//         break;

//     case "guide":
//         bookingData = guides[item];
//         break;

//     case "place":
//         bookingData = places[item];
//         break;
// }




// if (bookingData) {

//     document.getElementById("serviceName").textContent =
//         bookingData.name;

//     document.getElementById("serviceState").textContent =
//         bookingData.city ||
//         bookingData.state ||
//         "Available Across India";

//     const price =
//         bookingData.price ||
//         bookingData.pricePerNight ||
//         bookingData.price_per_day ||
//         0;

//     document.getElementById("serviceprice").textContent =
//         "₹" + price;

//     document.getElementById("serviceQuantity").textContent =
//         quantity;

//     document.getElementById("totalAmount").textContent =
//         "₹" + total.toLocaleString("en-IN");
// }




// const payNow =
//     document.getElementById("payNow");

// payNow.addEventListener(
//     "click",
//     function () {

//         const cardName =
//             document.getElementById("cardName").value;

//         const cardNumber =
//             document.getElementById("cardNumber").value;

//         const expiry =
//             document.getElementById("expiry").value;

//         const cvv =
//             document.getElementById("cvv").value;


//         if (
//             !cardName ||
//             !cardNumber ||
//             !expiry ||
//             !cvv
//         ) {

//             alert(
//                 "Please fill all payment details"
//             );

//             return;
//         }


//         alert(
//             "Payment Successful!"
//         );

//         window.location.href =
//             "index.html";

//     }
// );








// =====================================
// READ URL PARAMETERS
// =====================================

// const paymentParams =
//     new URLSearchParams(window.location.search);

// const paymentType =
//     paymentParams.get("type");

// const paymentItem =
//     paymentParams.get("item");

// const quantity =
//     Number(paymentParams.get("qty")) || 1;

// const total =
//     Number(paymentParams.get("total")) || 0;




// let bookingData = null;

// switch (paymentType) {

//     case "hotel":
//         bookingData = hotels[paymentItem];
//         break;

//     case "vehicle":
//         bookingData = vehicles[paymentItem];
//         break;

//     case "guide":
//         bookingData = guides[paymentItem];
//         break;

//     case "place":
//         bookingData = places[paymentItem];
//         break;
// }




// if (bookingData) {

//     document.getElementById("serviceName").textContent =
//         bookingData.name;

//     document.getElementById("serviceState").textContent =
//         bookingData.city ||
//         bookingData.state ||
//         "Available Across India";

//     const price =
//         bookingData.price ||
//         bookingData.pricePerNight ||
//         bookingData.price_per_day ||
//         0;

//     document.getElementById("serviceprice").textContent =
//         "₹" + price;

//     document.getElementById("serviceQuantity").textContent =
//         quantity;

//     document.getElementById("totalAmount").textContent =
//         "₹" + total.toLocaleString("en-IN");
// }




// const payNow =
//     document.getElementById("payNow");

// payNow.addEventListener(
//     "click",
//     function () {

//         const cardName =
//             document.getElementById("cardName").value;

//         const cardNumber =
//             document.getElementById("cardNumber").value;

//         const expiry =
//             document.getElementById("expiry").value;

//         const cvv =
//             document.getElementById("cvv").value;


//         if (
//             !cardName ||
//             !cardNumber ||
//             !expiry ||
//             !cvv
//         ) {

//             alert(
//                 "Please fill all payment details"
//             );

//             return;
//         }


//         alert(
//             "Payment Successful!"
//         );

//         window.location.href =
//             "index.html";
//     }
// );








// =====================================
// GET PAYMENT DETAILS FROM URL
// =====================================

// const paymentParams =
//     new URLSearchParams(window.location.search);

// const paymentType =
//     paymentParams.get("type");

// const paymentItem =
//     paymentParams.get("item");

// const quantity =
//     Number(paymentParams.get("qty")) || 1;

// const total =
//     Number(paymentParams.get("total")) || 0;




// let bookingData = null;

// switch (paymentType) {

//     case "hotel":

//         bookingData =
//             hotels[paymentItem];

//         break;


//     case "vehicle":

//         bookingData =
//             vehicles[paymentItem];

//         break;


//     case "guide":

//         bookingData =
//             guides[paymentItem];

//         break;


//     case "place":

//         bookingData =
//             places[paymentItem];

//         break;

// }




// if (bookingData) {

//     document
//         .getElementById("serviceName")
//         .textContent =
//         bookingData.name;


//     document
//         .getElementById("serviceState")
//         .textContent =
//         bookingData.city ||
//         bookingData.state ||
//         "Available Across India";


//     const price =
//         bookingData.price ||
//         bookingData.pricePerNight ||
//         bookingData.price_per_day ||
//         0;


   
//     document
//         .getElementById("servicePrice")
//         .textContent =
//         "₹" + price;


//     document
//         .getElementById("summaryQuantity")
//         .textContent =
//         quantity;


//     document
//         .getElementById("totalAmount")
//         .textContent =
//         "₹" + total.toLocaleString("en-IN");

// }




// const paymentMethods =
//     document.querySelectorAll(
//         'input[name="paymentMethod"]'
//     );


// const cardPayment =
//     document.getElementById("cardPayment");


// const upiPayment =
//     document.getElementById("upiPayment");


// const cashPayment =
//     document.getElementById("cashPayment");


// paymentMethods.forEach(method => {

//     method.addEventListener(
//         "change",
//         function () {

           
//             cardPayment.style.display =
//                 "none";

//             upiPayment.style.display =
//                 "none";

//             cashPayment.style.display =
//                 "none";


//             // selected section show
//             if (this.value === "card") {

//                 cardPayment.style.display =
//                     "block";

//             }

//             else if (this.value === "upi") {

//                 upiPayment.style.display =
//                     "block";

//             }

//             else if (this.value === "cash") {

//                 cashPayment.style.display =
//                     "block";

//             }

//         }

//     );

// });



// const payNow =
//     document.getElementById("payNow");


// payNow.addEventListener(
//     "click",
//     function () {


//         const selectedMethod =
//             document.querySelector(
//                 'input[name="paymentMethod"]:checked'
//             ).value;


        

//         if (selectedMethod === "card") {


//             const cardName =
//                 document
//                     .getElementById("cardName")
//                     .value
//                     .trim();


//             const cardNumber =
//                 document
//                     .getElementById("cardNumber")
//                     .value
//                     .trim();


//             const expiry =
//                 document
//                     .getElementById("expiry")
//                     .value
//                     .trim();


//             const cvv =
//                 document
//                     .getElementById("cvv")
//                     .value
//                     .trim();


//             if (
//                 !cardName ||
//                 !cardNumber ||
//                 !expiry ||
//                 !cvv
//             ) {

//                 alert(
//                     "Please fill all card details"
//                 );

//                 return;

//             }


//             alert(
//                 "Card Payment Successful!"
//             );

//         }


//         else if (selectedMethod === "upi") {


//             const upiId =
//                 document
//                     .getElementById("upiId")
//                     .value
//                     .trim();


//             if (!upiId) {

//                 alert(
//                     "Please enter your UPI ID"
//                 );

//                 return;

//             }


//             alert(
//                 "UPI Payment Successful!"
//             );

//         }


      
//         else if (selectedMethod === "cash") {


//             alert(
//                 "Booking Confirmed! Payment will be collected in cash."
//             );

//         }



//         window.location.href =
//             "home.html";

//     }

// );












// document.addEventListener("DOMContentLoaded", function () {

    
//     const paymentOptions = document.querySelectorAll(
//         'input[name="paymentMethod"]'
//     );

//     const upiSection = document.getElementById("upiSection");
//     const cardSection = document.getElementById("cardSection");
//     const cashSection = document.getElementById("cashSection");

    
//     function hideAllSections() {
//         upiSection.style.display = "none";
//         cardSection.style.display = "none";
//         cashSection.style.display = "none";
//     }

    
//     paymentOptions.forEach(function (option) {

//         option.addEventListener("change", function () {

//             hideAllSections();

//             if (this.value === "upi") {
//                 upiSection.style.display = "block";
//             }

//             else if (this.value === "card") {
//                 cardSection.style.display = "block";
//             }

//             else if (this.value === "cash") {
//                 cashSection.style.display = "block";
//             }

//         });

//     });


    
//     const payNowBtn = document.getElementById("payNowBtn");
//     const paymentMessage = document.getElementById("paymentMessage");

//     payNowBtn.addEventListener("click", function () {

//         const selectedPayment = document.querySelector(
//             'input[name="paymentMethod"]:checked'
//         );

//         if (!selectedPayment) {

//             paymentMessage.textContent =
//                 "Please select a payment method.";

//             paymentMessage.style.color = "red";

//             return;
//         }






 
    
       
//         paymentMessage.textContent =
//             "Payment Successful! Booking Confirmed 🎉";

//         paymentMessage.style.color = "green";

            
        

//     });

// });










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
    "http://localhost:9093/api/payments",
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