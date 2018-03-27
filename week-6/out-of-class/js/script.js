"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

//set variables
let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];

let space = ' '

    function displayOneDay(one_days_hours) {
        renderOutput(one_days_hours)
    

    let output = one_days_hours = one_days_hours + " - ";

    displayOneDay("Monday: 9a - 9p");

    }



//split the array
//function splitString () {
//let days_of_week = hours.split(", ");
//console.log(days_of_week[1], days_of_week[0]);
//}

