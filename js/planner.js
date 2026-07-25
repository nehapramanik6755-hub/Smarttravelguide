// planner.js

function generatePlan() {
    // Input values
    let destination = document.getElementById("destination").value;
    let days = document.getElementById("days").value;
    let budget = document.getElementById("budget").value;
    let interest = document.getElementById("interest").value.toLowerCase();

    // Validation
    if (destination === "" || days === "" || budget === "" || interest === "") {
        alert("Please fill all fields");
        return false;
    }

    // Dummy AI-based plans
    let plans = {
        temple: ["Kashi Vishwanath Temple", "Sarnath", "Kal Bhairav Temple"],
        nature: ["Ganga Ghat Boat Ride", "Riverside Walk", "Sunset Point"],
        history: ["Sarnath Museum", "Ramnagar Fort", "Ancient Streets Tour"],
        adventure: ["Boat Ride", "Street Food Walk", "Night Ganga Aarti"]
    };

    let selectedPlan = [];

    // Matching interest
    if (interest.includes("temple")) {
        selectedPlan = plans.temple;
    } else if (interest.includes("nature")) {
        selectedPlan = plans.nature;
    } else if (interest.includes("history")) {
        selectedPlan = plans.history;
    } else {
        selectedPlan = plans.adventure;
    }

    // Result box
    let output = document.getElementById("planResult");
    output.innerHTML = "";

    let title = document.createElement("h2");
    title.innerText = `Your ${days}-Day Trip Plan for ${destination}`;
    output.appendChild(title);

    selectedPlan.forEach((place, index) => {
        let div = document.createElement("div");
        div.className = "plan-item";
        div.innerHTML = `
            <h3>Day ${index + 1}</h3>
            <p>${place}</p>
        `;
        output.appendChild(div);
    });

    // Save plan in localStorage
    let savedPlans = JSON.parse(localStorage.getItem("plans")) || [];
    savedPlans.push({
        destination,
        days,
        budget,
        interest,
        plan: selectedPlan
    });

    localStorage.setItem("plans", JSON.stringify(savedPlans));

    return false;
}