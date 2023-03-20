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


resetTimeUpButton.addEventListener('click', function(e) {
  location.reload();
}, false);


var highScoreContainer = document.getElementById("high-score-container");


startButton.addEventListener("click", startQuiz)

var questions = [
  {
    question:"What is HTML short for?", 
    choices: ["Hi There My Love", "He Took My Lettuce", "Hyper Theory Mopping Lines", "HyperText Markup Language"], 
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

function endQuiz() {
  
  questionContainer.style.display = "none";
  highScoreContainer.classList.remove('hide');
  clearInterval(quizTimer);
  document.getElementById("timer").innerHTML = "All Done!";
  scoreProgress.innerHTML = "Your Final Score: " +score
   
  
}


startButton.addEventListener("click", startQuiz)

questionContainer.addEventListener('click', handleQuestionClick)

function startQuiz() {
  
  startTimer();
  renderQuestions();
  
   
}

function timeOut() {
    
  document.getElementById("timer").innerHTML = "Time Ran Out!";
      questionContainer.style.display = "none";
    scoreProgress.innerHTML = "Your Final Score: 0"
    resetTimeUpContainer.classList.remove('hide');
    resetTimeUpButton.setAttribute("style", "width: 500px; height: 100px; background-color: lightgray; font-size: 30px;");


}
var quizTimer;
var timeLeft = 45;
function startTimer() {

 quizTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    timeOut();
    
    
    // document.getElementById("timer").innerHTML = "Game Over!";
    // document.createElement("reset").innerHTML = "reset quiz";
    // questionContainer.style.display = "none";
    // scoreProgress.innerHTML = "Your Final Score: 0" 
                            
  } else {
    document.getElementById("timer").innerHTML =
    timeLeft + " seconds remaining ";
  }

  timeLeft -= 1;
  
  
}, 1000);
}





// todo
// create high score and user input stored data
// const initials = prompt("Enter Your Initials");
// document.getElementById("highScoreTracker").innerHTML = "High Score, " + initials;

// decrement timer if answer is wrong-done
// end timer when quiz has ended-done






// start button function needs to start timer and populate questions-done
// create questions-done

// create reset function-done
// loop questions-done
// create questions-done
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