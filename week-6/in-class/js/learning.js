// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

//set variables
let my_name = "Lindsay";
let your_name = "Bob";

//ask person to enter their name
let name = prompt("What is your name?");

// boolean to decide if entered name is or is not Lindsay or Bob
if(name === "Lindsay") {
  renderOutput("That's me!");
} 
else if(name === "Bob") {
  renderOutput("That's Bob");
}
else {
  renderOutput("I must be someone else");
}


function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name) {
  renderOutput("Hello " + name);
}

helloName("Lindsay");
helloName("George");
helloName("Martha");

//days_hours just names what the function does
//each time you run it it does one days hours at a time
function todaysHours(one_days_hours) {
  renderOutput(one_days_hours);
}

//todaysHours("Tuesday: 9a - 5p");

//for each hour in this list hours, take this function and run it
//it will print out each of the items in the array in order
//for each element in the hours list do the function
hours.forEach(todaysHours);


