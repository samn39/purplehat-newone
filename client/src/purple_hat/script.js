/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

// /* 
// Make the "Click me!" button move when the visitor clicks it:
// - First add the button to the page by following the "Next steps" in the README
// */
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const button = document.querySelector('.btn');
const show = document.getElementById ('show');
const button2 = document.querySelector('.formColB');


button.addEventListener ('click', result);
button2.addEventListener ('click', result2);


function result2(e) {
  e.preventDefault();
  document.getElementById("show2").textContent = "I have changed!";
}


function result (e) {
    e.preventDefault();

    let points = 0;

    if (document.querySelector ('#answer1').checked) {
        points ++;
    }
    if (document.querySelector ('#answer2').checked) {
        points ++;
    }
    if (document.querySelector ('#answer3').checked) {
        points ++;
    }
    if (document.querySelector ('#answer4').checked) {
        points ++;
    }
    if (document.querySelector ('#answer5').checked) {
        points ++;
    }
  

    if (points < 5) {
      show.textContent = 'Your Points are : ' + points + '/5 ' + 'Keep trying!'
    } else {
      show.textContent = 'Your Points are : ' + points + '/5 ' + 'Congratulations! You got a 100%. We hope you have learned important new informatoin about this condition.'
    }
  
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}