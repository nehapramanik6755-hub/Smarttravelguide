// 1. DOM load hone ke baad sab code chalega
document.addEventListener("DOMContentLoaded", function () {

    // 2. Navbar toggle (mobile menu ke liye)
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    // 3. Smooth scroll for navigation links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });






     const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.querySelector(".nav-links");

        if (menuBtn && navLinks) {

            menuBtn.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });

        }


        const searchBtn = document.getElementById("searchBtn");

        if (searchBtn) {

            searchBtn.addEventListener("click", () => {

                const searchInput =
                    document.getElementById("searchInput").value.trim();

                if (!searchInput) {

                    alert("Please enter a destination.");
                    return;

                }

                window.location.href =
                    "explore.html?search=" +
                    encodeURIComponent(searchInput);

            });

        }


        





    // 4. Hero button click (Explore Now button)
    const exploreBtn = document.querySelector(".explore-btn");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            window.location.href = "../places/places.html";
        });
    }

    // 5. Login check (simple demo localStorage based)
    const user = localStorage.getItem("user");

    if (user) {
        console.log("User logged in:", user);
    } else {
        console.log("No user found");
    }

});