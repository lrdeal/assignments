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

    function displayOneDaysHours(one_days_hours) {
    
    //split the hours, start with variables and then make a loop that if it is not sunday it should display the other hours
    let parts_of_hours = one_days_hours.split(": ");
    let output = "On " + parts_of_hours[0] +  " the hours are " + parts_of_hours[1] + "."
    
    if (parts_of_hours[0] === "Sunday") {
      renderOutput("On Sunday the Library is closed");
    } else {
      renderOutput("On " + parts_of_hours[0] +  " the hours are " + parts_of_hours[1] + ".")
     }
   }
    //display the weeks hours to the user
    function dailyHours(hours) {
        hours.forEach(displayOneDaysHours);
    }

    dailyHours(hours);
