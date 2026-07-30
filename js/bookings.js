


const params = new URLSearchParams(window.location.search);

const type = params.get("type");

const item = params.get("item");


// ===============================
// FIND SELECTED SERVICE
// ===============================

let bookingData = null;

switch (type) {

    case "hotel":
        bookingData = hotels[item];
        break;

    case "vehicle":
        bookingData = vehicles[item];
        break;

    case "guide":
        bookingData = guides[item];
        break;

    case "place":
        bookingData = places[item];
        break;
}


// ===============================
// SHOW SERVICE DETAILS
// ===============================

if (bookingData) {

    document.getElementById("serviceName").textContent =
        bookingData.name;

    document.getElementById("serviceState").textContent =
        bookingData.city ||
        bookingData.state ||
        "Available Across India";

    const price =
        bookingData.price ||
        bookingData.pricePerNight ||
        bookingData.price_per_day ||
        0;

    document.getElementById("servicePrice").textContent =
        "₹" + price;
}


// ===============================
// INPUT ELEMENTS
// ===============================

const quantityInput =
    document.getElementById("nights");

const summaryQuantity =
    document.getElementById("summaryQuantity");

const totalAmount =
    document.getElementById("totalAmount");

const bookingForm =
    document.getElementById("bookingForm");


// ===============================
// CALCULATE TOTAL
// ===============================

function calculateTotal() {

    if (!bookingData) return;

let quantity =
        Number(quantityInput.value) || 1;



    if (quantity < 1) {

        quantity = 1;

        quantityInput.value = 1;
    }

    summaryQuantity.textContent =
        quantity;

    const price =
        bookingData.price ||
        bookingData.pricePerNight ||
        bookingData.price_per_day ||
        0;

    const total =
        price * quantity;

    totalAmount.textContent =
        "₹" + total.toLocaleString("en-IN");
}


// Initial calculation
calculateTotal();


// Recalculate when quantity changes
quantityInput.addEventListener(
    "input",
    calculateTotal
);


// ===============================
// CONTINUE TO PAYMENT
// ===============================

bookingForm.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();

        const quantity =
            Number(quantityInput.value) || 1;

        const price =
            bookingData.price ||
            bookingData.pricePerNight ||
            bookingData.price_per_day ||
            0;

        const total =
            price * quantity;


        const booking = {

            customerName:
                document.getElementById("fullName").value,

            customerEmail:
                document.getElementById("email").value,

            phone:
                document.getElementById("mobile").value,

            bookingType:
                type,

            itemName:
                bookingData.name,

            quantity:
                quantity,

            amount:
                total,

            status:
                "Pending"
        };




        localStorage.setItem(
    "bookingData",
    JSON.stringify(booking)
);




        try {

            const response =
                await fetch(
                    "https://smart-travelguide-backend.up.railway.app/api/bookings",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(booking)
                    }
                );

                

            if (response.ok) {

                window.location.href =

                    `payments.html?type=${type}&item=${item}&qty=${quantity}&total=${total}`;

      

            } else {

                alert(
                    "Booking failed!"
                );
            }


        } catch (error) {

            console.error(error);

            alert(
                "Server Error"
            );
        }

    }
);