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
    const revenueBox = document.getElementById("predictedRevenue");

    var title = $("#data-title").val();
    var genre = $("#data-genre").val();
    var release = $("#data-release").val();
    var score = $("#data-score").val();
    var votes = $("#data-votes").val();
    var director = $("#data-director").val();
    var actor = $("#data-actor").val();
    var country = $("#data-country").val();
    var budget = $("#data-budget").val();
    var company = $("#data-company").val();
    var runtime = $("#data-runtime").val();

    console.log("Called getPredictedRevenue()");

    console.log("Title: " + title);
    console.log("Genre: " + genre);
    console.log("Release: " + release);
    console.log("Score: " + score);
    console.log("Votes: " + votes);
    console.log("Director: " + director);
    console.log("Actor: " + actor);
    console.log("Country: " + country);
    console.log("Budget: " + budget);
    console.log("Company: " + company);
    console.log("Runtime: " + runtime);

    // Set content
    $("#predictedRevenue").html(
        "Predicted Revenue: " + title + " " + genre + " " + release + " " + score + " " + votes + " " +
        director + " " + actor + " " + country + " " + budget + " " + company + " " + runtime
    );

    // Show and animate
    revenueBox.style.display = "inline-block"; // ensure it's visible
    revenueBox.classList.add("show");          // trigger animation
}