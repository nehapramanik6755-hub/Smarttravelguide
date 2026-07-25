function searchGuide() {

    let city = document.getElementById("city").value.toLowerCase().trim();
    let language = document.getElementById("language").value.toLowerCase();

    let guides = document.querySelectorAll(".guide-card");

    guides.forEach(function(guide){

        let guideCity = guide.getAttribute("data-city").toLowerCase();
        let guideLanguage = guide.getAttribute("data-language").toLowerCase();

        if(
            guideCity.includes(city) &&
            (language === "" || guideLanguage.includes(language))
        ){
            guide.style.display = "block";
        }else{
            guide.style.display = "none";
        }

    });

}