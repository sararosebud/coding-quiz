// declare the values of each part of the app
var startButton = document.getElementById("startButton");
var timer = document.getElementById("timer");
var scoreProgress = document.getElementById("scoreProgress");
var quiz = document.getElementById("questionbox");
var questionsEl = document.getElementById("questions");
var reset = document.getElementById("reset")
var highScoreTracker = document.getElementById("highScoreTracker");
var questionContainer = document.getElementById("question-container");
var questionIndex = 0;
var score = 0;
var resetTimeUpButton = document.getElementById('resetTimeUp')
var resetTimeUpContainer = document.getElementById('time-up-container');

var highScoreContainer = document.getElementById("high-score-container");

var questions = [
  {
    question:"What is HTML short for?", 
    choices: ["Hi There Mr. Lovecraft", "He Took My Lettuce", "Hyper Theory Mapping Lines", "HyperText Markup Language"], 
    answer: "HyperText Markup Language"
  }, 
  {
    question:"Which Tag is used to create a hyperlink?", 
    choices: ["<a>", "<b>", "<p>", "<div>"], 
    answer: "<a>"
  },
  {
    question:"Question3", 
    choices: ["A", "b", "c", "d"], 
    answer: "d"
  },
  {
    question:"Question4", 
    choices: ["A", "b", "c", "d"], 
    answer: "d"
  },
  {
    question:"Question5", 
    choices: ["A", "b", "c", "d"], 
    answer: "d"
  },
] 

var quizTimer;
// show questions when start button is clicked and iterate through them
function renderQuestions() {
  var quizBox = document.createElement('div');
  var prompt = document.createElement('p');
  prompt.textContent = questions[questionIndex].question;
  quizBox.append(prompt);

  for (i=0; i < questions[questionIndex].choices.length; i++) {
    var choice = document.createElement('button');
    choice.textContent = questions[questionIndex].choices[i]
    choice.setAttribute("style", "width: 500px; height: 100px; background-color: lightgray; font-size: 30px;");
    quizBox.append(choice);
  }
  
  questionContainer.append(quizBox)

}
//  what happens if user selects correct or incorrect answer/decrement time from incorrect
function handleQuestionClick(e) {

  var questionClicked = e.target.textContent
  if (questionClicked === questions[questionIndex].answer) {
    console.log('correct')
    

    score++
    scoreProgress.innerHTML = "Score: " +score
             

  } else {
    console.log('incorrect')
      timeLeft -= 15;
      alert('incorrect!');       
                  
    }

  questionIndex++

  questionContainer.innerHTML = ""

  if (questionIndex > questions.length - 1) {
    endQuiz();   
    
    

    
  } else {
    renderQuestions()   

  }
  
  }
// end quiz, show final score, show the high score entry form
function endQuiz() {
  
  questionContainer.style.display = "none";
  highScoreContainer.classList.remove('hide');
  clearInterval(quizTimer);
  document.getElementById("timer").innerHTML = "All Done!";
  scoreProgress.innerHTML = "Your Final Score: " +score
   
  
}



// push start button and start quiz renders questions, then hides the start button
function startQuiz() {
  
  startTimer();
  renderQuestions();
  startButton.style.display = "none";
  
   
}
// stop quiz when time runs out, show final score, hide question container
function timeOut() {
    
  document.getElementById("timer").innerHTML = "Time Ran Out!";
      questionContainer.style.display = "none";
    scoreProgress.innerHTML = "Your Final Score: 0"
    resetTimeUpContainer.classList.remove('hide');
    resetTimeUpButton.setAttribute("style", "width: 200px; height: 50px; border-radius: 10px; background-color: lightgray; font-size: 20px;");

}



// quiz timer 
var quizTimer;
var timeLeft = 45;
function startTimer() {

 quizTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    timeOut();
   
                            
  } else {
    document.getElementById("timer").innerHTML =
    timeLeft + " seconds remaining ";
  }

  timeLeft -= 1;
  
  
}, 1000);
}
// save scores and putsh them to local storage
function saveScore() {
  var savedInitials = document.getElementById("initials").value.trim();

var highScores = JSON.parse(localStorage.getItem('highScores')) || []
var newHighScore = {
  initials: savedInitials, 
  score: score
}
highScores.push(newHighScore)

localStorage.setItem("highScores", JSON.stringify(highScores))

renderHighScores(highScores);

// tried this first to test local storage
//   window.localStorage.setItem('score', score);
// console.log('scorelog')

// var savedInitials = document.getElementById("initials").value.trim();
// console.log('saved initials')
// window.localStorage.setItem('initials', savedInitials);
}

// populates high scores into an ordered list in the html sidebar on the top left
function renderHighScores(scores) {
  var scoreList = document.getElementById('high-score-list');
  for (i = 0; i <= scores.length - 1; i++) {
    var scoreItem = document.createElement("li")
    scoreItem.textContent = `User: ${scores[i].initials} Score: ${scores[i].score}`;
    scoreList.append(scoreItem);
  }

}
// event listeners 

startButton.addEventListener("click", startQuiz)

questionContainer.addEventListener('click', handleQuestionClick)

document.querySelector('#highScoreTracker').addEventListener("submit",function(e){
  e.preventDefault();
  saveScore();
  var restartButton = document.createElement("button")
  restartButton.textContent = "restart quiz"
  highScoreContainer.append(restartButton)
  restartButton.addEventListener('click', function(){ 
    highScoreContainer.style.display = "none";
    questionIndex = 0;
    questionContainer.style.display = "block";
    startQuiz()
  })
} )


resetTimeUpButton.addEventListener('click', function(e) {
  location.reload();
}, false);











// const initials = prompt("Enter Your Initials");
// document.getElementById("highScoreTracker").innerHTML = "High Score, " + initials;








// first try at questions
// questions = [
  //   new Question(
    //     "this is question one?",
    //     ["answers", "answers", "Correct Answer", "answer"],
//     "Correct Answer"
//   ),
//   new Question(
//     "Question two?",
//     ["answers", "Correct Answer", "answer", "answer"],
//     "Correct Answer"
//   ),
//   new Question(
//     "4?",
//     ["Correct Answer", "answers", "answer", "answer"],
//     "Correct Answer"
//   ),
//   new Question("5?", ["b", "Correct Answer", "ee", "ss"], "Correct Answer"),
// ];

// code that i tried 
// const startButton = document.getElementById("startButton");
//   startButton.addEventListener("click", function(e) {
//     console.log('clickedbutton')

//   });

// function endQuizTimer(){
//   var questionsCount = 0;
  
//   var questionsCompleted = setInterval(function (){
//     if (questions[questionsCount]===undefined){
//       clearInterval(questionsCompleted);
//     }
//   }) }

// if (questionIndex > questions.length - 1) {
//   clearInterval(quizTimer);

    
// }