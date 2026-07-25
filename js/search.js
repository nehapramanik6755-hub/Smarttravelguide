
function searchPlaces() {

    // Input value lena
    let query = document.getElementById("searchInput").value.toLowerCase();

    if (query === "") {
        alert("Please enter something to search");
        return false;
    }

    // Places data
    let places = [
        {
            name: "Taj Mahal",
            location: "Agra, Uttar Pradesh",
            link: "../places/place-details.html"
        },
        {
            name: "Goa Beaches",
            location: "Goa",
            link: "../places/goa details.html"
        },
        {
            name: "Jaipur",
            location: "Rajasthan",
            link: "../places/jaipur.html"
        },
        {
            name: "Kerala Backwaters",
            location: "Kerala",
            link: "../places/kerala.html"
        },
        {
            name: "Manali",
            location: "Himachal Pradesh",
            link: "../places/manali.html"
        },
        {
            name: "Varanasi",
            location: "Uttar Pradesh",
            link: "../places/varanasi.html"
        }
    ];

    // Filter results
    let results = places.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query)
    );

    // Result box
    let resultBox = document.getElementById("searchResults");
    resultBox.innerHTML = "";

    if (results.length === 0) {
        resultBox.innerHTML = "<p>No results found</p>";
        return false;
    }

    // Show results
    results.forEach(place => {
        let div = document.createElement("div");
        div.className = "result-item";

        div.innerHTML = `
            <h3><a href="${place.link}">${place.name}</a></h3>
            <p>${place.location}</p>
        `;

        resultBox.appendChild(div);
    });

    return false;
}