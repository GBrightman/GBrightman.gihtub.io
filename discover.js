var answers = ["2","3","2","1","2","1","2","3","1"] // these are the correct answers for the questions on the paddle discover quiz
  total = answers.length; // assigns the number of questions to a variable

function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName); // returns an array of all radio buttons
  for (var x = 0; x < radios.length; x++) // a for loop to iterate through the list of radio buttons
    if (radios[x].checked) return radios[x].value; // returns the user selected value for each question
}

function getScore() {
  var score = 0;
  for (var i = 0; i < total; i++) // a for loop for each question and answer
    if (getCheckedValue("question" + i) === answers[i]) score += 1; // adds one to the score when an answer is correct
  return score;
}

function returnScore() {
  document.getElementById("score").innerHTML = getScore() + "/" + total; // prints the score to an element on the page
}

// When the user scrolls the page, execute scrollNavbar
window.onscroll = function() {scrollNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
