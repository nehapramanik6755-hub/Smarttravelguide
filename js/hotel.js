function searchHotels() {

    let city = document.getElementById("hotelSearch").value.toLowerCase();

    let hotels = [

{
name: "Hotel Taj View",
city: "Agra",
price: "2000",
facilities: "Free WiFi | Breakfast | Pool",
image: "../images/hotels/taj-view.jpg",
details: "../hotels/hotel-taj-view.html"
},




{
name: "Radisson Agra",
city: "Agra",
rating: "4.8",
price: "7200",
facilities: "Free WiFi | Breakfast | Gym",
image: "../images/hotels/radisson-agra.jpg",
details: "../"
},

{
name: "ITC Mughal",
city: "Agra",
rating: "4.9",
price: "9800",
facilities: "Pool | Spa | Breakfast",
image: "../images/hotels/itc-mughal.jpg",
details: "hotel-details.html"
},

{
name: "Taj Fort Aguada",
city: "Goa",
price: "12000",
facilities: "Beach View | Pool | Free WiFi",
image: "../images/hotels/taj-fort-aguada.jpg",
details: "hotel-details.html"
},

{
name: "Novotel Goa",
city: "Goa",
price: "7600",
facilities: "Breakfast | Pool | Free WiFi",
image: "../images/hotels/novotel-goa.jpg",
details: "hotel-details.html"
},

{
name: "Grand Hyatt Goa",
city: "Goa",
price: "14500",
facilities: "Luxury Spa | Beach | Pool",
image: "../images/hotels/grand-hyatt-goa.jpg",
details: "hotel-details.html"
},

{
name: "Rambagh Palace",
city: "Jaipur",
price: "25000",
facilities: "Luxury Palace | Spa | Pool",
image: "../images/hotels/rambagh-palace.jpg",
details: "hotel-details.html"
},

{
name: "ITC Rajputana",
city: "Jaipur",
price: "8500",
facilities: "Breakfast | Pool | Gym",
image: "../images/hotels/itc-rajputana.jpg",
details: "hotel-details.html"
},

{
name: "Trident Jaipur",
city: "Jaipur",
price: "7000",
facilities: "Free WiFi | Pool | Breakfast",
image: "../images/hotels/trident-jaipur.jpg",
details: "hotel-details.html"
},

{
name: "The Leela Kovalam",
city: "Kerala",
price: "15000",
facilities: "Beach View | Spa | Pool",
image: "../images/hotels/leela-kovalam.jpg",
details: "hotel-details.html"
},

{
name: "Kumarakom Lake Resort",
city: "Kerala",
price: "13500",
facilities: "Lake View | Pool | Breakfast",
image: "../images/hotels/kumarakom.jpg",
details: "hotel-details.html"
},

{
name: "Taj Bekal Resort",
city: "Kerala",
price: "12500",
facilities: "Spa | Beach | Free WiFi",
image: "../images/hotels/taj-bekal.jpg",
details: "hotel-details.html"
},

{
name: "The Himalayan",
city: "Manali",
price: "11000",
facilities: "Mountain View | Breakfast | Fireplace",
image: "../images/hotels/the-himalayan.jpg",
details: "hotel-details.html"
},

{
name: "Snow Valley Resort",
city: "Manali",
price: "6500",
facilities: "Mountain View | Free WiFi | Breakfast",
image: "../images/hotels/snow-valley.jpg",
details: "hotel-details.html"
},

{
name: "Apple Country Resort",
city: "Manali",
price: "7000",
facilities: "Spa | Free WiFi | Breakfast",
image: "../images/hotels/apple-country.jpg",
details: "hotel-details.html"
},

{
name: "BrijRama Palace",
city: "Varanasi",
price: "13000",
facilities: "Ganga View | Breakfast | Free WiFi",
image: "../images/hotels/brijrama.jpg",
details: "hotel-details.html"
},

{
name: "Hotel Surya",
city: "Varanasi",
price: "5000",
facilities: "Pool | Free WiFi | Breakfast",
image: "../images/hotels/hotel-surya.jpg",
details: "hotel-details.html"
},

{
name: "Taj Ganges",
city: "Varanasi",
price: "9000",
facilities: "Pool | Spa | Free WiFi",
image: "../images/hotels/taj-ganges.jpg",
details: "hotel-details.html"
}

];

    let results = hotels.filter(hotel =>
        hotel.city.includes(city)
    );

    let resultBox = document.getElementById("hotelResults");
    resultBox.innerHTML = "";

    if(results.length === 0){
        resultBox.innerHTML = "<p>No Hotels Found</p>";
        return;
    }

    results.forEach(hotel => {
        resultBox.innerHTML += `
            <div class="hotel-card">
                <h3>${hotel.name}</h3>
                <p>${hotel.city.toUpperCase()}</p>
            </div>
        `;
    });
}


// document.addEventListener("DOMContentLoaded", loadHotels);

// async function loadHotels() {
//     try {
//         const response = await fetch("http://localhost:9093/api/hotels");

//         if (!response.ok) {
//             throw new Error("Failed to fetch hotels");
//         }

//         const hotels = await response.json();

//         const container = document.getElementById("hotelContainer");
//         container.innerHTML = "";

//         hotels.forEach((hotel,index)=> {

//             const card = document.createElement("div");
//             card.className = "hotel-card";

//             card.innerHTML = `
//                 <img src="../Images/${hotel.image}" alt="${hotel.name}">

//                 <h3>${hotel.name}</h3>

//                 <p><b>City:</b> ${hotel.city}</p>

//                 <p><b>Location:</b> ${hotel.location}</p>

//                 <p><b>Price:</b> ₹${hotel.pricePerNight} / Night</p>


//                 <a href="${hotel.details}" class="btn">
//     View Details
// </a>

//                 <a href="../booking/booking.html?type=hotel&item=${index}" class="btn">
//                     Book Now
//                 </a>
//             `;

//             container.appendChild(card);
//         });

//     } catch (error) {
//         console.error("Error:", error);

//         document.getElementById("hotelContainer").innerHTML =
//             "<h2>Unable to load hotels.</h2>";
//     }
// }