document.addEventListener("DOMContentLoaded", loadPlaces);

async function loadPlaces() {
    try {
        const response = await fetch("http://smart-travelguide-backend.up.railway.app/api/places");
        const places = await response.json();

        const container = document.getElementById("placesContainer");
        container.innerHTML = "";

        places.forEach(place => {

            const card = document.createElement("div");
            card.className = "place-card";

            card.innerHTML = `
                <img src="../Images/${place.image}" alt="${place.name}">
                <h3>${place.name}</h3>
                <p>${place.city}</p>
                <a href="place-details.html?name=${encodeURIComponent(place.name)}" class="btn">
                    Explore
                </a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading places:", error);
    }
}