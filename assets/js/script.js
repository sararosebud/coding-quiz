// declare the values of each part of the app
var startButton = document.getElementById("#startButton");
var timer = document.getElementById("#timer");
var scoreProgress = document.getElementById("#scoreProgress");
var quiz = document.getElementById("#questionbox");
var questions = document.getElementById("questions");
var reset = document.getElementById("reset")
var highScoreTracker = document.getElementById("highScoreTracker");





// const startButton = document.getElementById("startButton");
//   startButton.addEventListener("click", function(e) {
//     console.log('clickedbutton')

//   });





// timer function
var timeLeft = 5;
var quizTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    document.getElementById("timer").innerHTML = "Game Over!";
    // document.getElementById("startbutton").style.display = "none";
    document.getElementById("questionbox").style.display = "none";
    document.getElementById("highScoreTracker").style.display = "block";
    

  } else {
    document.getElementById("timer").innerHTML =
      timeLeft + " seconds remaining ";
  }
  timeLeft -= 1;

}, 1000);



// start button function needs to start timer and populate questions
// create questions

// create reset function
// loop questions
// create high score and user input stored data
// const initials = prompt("Enter Your Initials");
// document.getElementById("highScoreTracker").innerHTML = "High Score, " + initials;


