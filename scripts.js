/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Function that gets called when the button is pushed.
// This takes all the data inputs and calls the API to get the predicted revenue.
async function getPredictedRevenue() {
    console.log("Called getPredictedRevenue()");

    const apiUrl = "https://coil-team9-api-b5becqfabsbahbba.eastus-01.azurewebsites.net/predict";
    const revenueBox = document.getElementById("predictedRevenue");

    var title = $("#data-title").val();
    var genre = $("#data-genre").val();
    var release = $("#data-release").val();
    var score = $("#data-score").val();
    var votes = $("#data-votes").val();
    var director = $("#data-director").val();
    var actor = $("#data-actor").val();
    var budget = $("#data-budget").val();
    var company = $("#data-company").val();
    var runtime = $("#data-runtime").val();
    
    const payload = {
        release_year: parseInt(release),
        title: title,
        budget: parseFloat(budget),
        production_companies: company,
        vote_count: parseInt(votes),
        imdb_score: parseFloat(score),
        runtime: parseInt(runtime),
        directors: director,
        actors: actor,
        genres: genre
    };

    console.log("Payload: ", payload);

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Prediction:", data.prediction);
    
        revenueBox.textContent = `Predicted Revenue: $${data.prediction.toLocaleString()}`;
        revenueBox.style.display = "inline-block";
        revenueBox.classList.add("show");
    
    } catch (error) {
        console.error("Error calling the predict API:", error);
        revenueBox.textContent = "An error occurred. Try again.";
        revenueBox.style.display = "inline-block";
    }    

    // Show and animate
    revenueBox.style.display = "inline-block"; // ensure it's visible
    revenueBox.classList.add("show");          // trigger animation
}