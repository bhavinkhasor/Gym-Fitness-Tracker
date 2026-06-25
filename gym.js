$(document).ready(function () {

    // Navbar Scroll Effect

    $(window).scroll(function () {

        if ($(window).scrollTop() > 50) {
            $(".navbar").css("background", "#000");
        } else {
            $(".navbar").css("background", "rgba(0,0,0,0.5)");
        }

    });

});

// Workout Tracker

$("#addWorkout").click(function () {

    let workout = $("#workoutInput").val();

    if (workout != "") {

        $("#workoutList").append(
            `<li>${workout}</li>`
        );

        $("#workoutInput").val("");

    }

});



// BMI Calculator

function calculateBMI() {

    let height = $("#height").val() / 100;
    let weight = $("#weight").val();

    let bmi = weight / (height * height);

    $("#bmiResult").html(
        "Your BMI : " + bmi.toFixed(1)
    );

}



// Water Tracker

let water = 0;

$("#waterBtn").click(function () {

    water++;

    $("#waterCount").text(water);

});



// Dark Mode

$(".dark-mode-btn").click(function () {

    $("body").toggleClass("light-mode");

});
// =========================
// Show User Data
// =========================

let storedUser = JSON.parse(
    localStorage.getItem("fitzoneUser")
);

if (storedUser) {

    // Navbar Name

    $("#userName").text(
        storedUser.name
    );

    // Profile Card Name

    $("#profileName").text(
        storedUser.name
    );

    // Email

    $("#profileEmail").text(
        storedUser.email
    );

}