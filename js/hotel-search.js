function searchHotels() {

    let city = document.getElementById("citySearch").value.toLowerCase();

    let cards = document.querySelectorAll(".hotel-card");

    cards.forEach(card => {

        let location = card.querySelector("p").innerText.toLowerCase();

        if (city === "" || location.includes(city)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}