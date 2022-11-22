var quiz = document.getElementById("quiz");
var below = document.getElementById('belowCountdown');
var timerEl = document.getElementById("countdown");
var wrongAnswer = false; //keeps track if the quiz taker has input a wrong answer, becomes true if they have, and the timer function will detect when this is true, subtract time, then return this variable to false
var timerIsZero = false; //create a boolean to check if the timer has hit 0, allows the user to select an answer so long as the timer hasn't hit 0, if the timer has hit 0, generate a button that allows them to exit the quiz
var allAnswered = false; //tracks if all questions have been answered
var lastQuestionWrong = false;
var finalTime = 0;
var correctAnswers = 0;
var questionNumber = 1;
var highScores = [];
var lowestScore = 0;
var timeLeft = 60;
var leftQuiz = false;

var question = [
  {
    title: "Commonly used data types DO Not Include",
    answers: [
      {
        answer: "1. strings",
        correct: false,
      },
      {
        answer: "2. booleans",
        correct: false,
      },
      {
        answer: "3. alerts",
        correct: true,
      },
      {
        answer: "4. numbers",
        correct: false,
      },
    ],
  },
  {
    title: "The condition in an if / else statement is enclosed with _______.",
    answers: [
      {
        answer: "1. quotes",
        correct: false,
      },
      {
        answer: "2. curly brackets",
        correct: false,
      },
      {
        answer: "3. parenthesis",
        correct: true,
      },
      {
        answer: "4. square brackets",
        correct: false,
      },
    ],
  },
  {
    title: "Arrays in JavaScript can be used to store ______.",
    answers: [
      {
        answer: "1. numbers and strings",
        correct: false,
      },
      {
        answer: "2. other arrays",
        correct: false,
      },
      {
        answer: "3. booleans",
        correct: false,
      },
      {
        answer: "4. all of the above",
        correct: true,
      },
    ],
  },
  {
    title:
      "String values must be enclosed within _____ when being assigned to variables",
    answers: [
      {
        answer: "1. commas",
        correct: false,
      },
      {
        answer: "2. curly brackets",
        correct: false,
      },
      {
        answer: "3. quotes",
        correct: true,
      },
      {
        answer: "4. parenthesis",
        correct: false,
      },
    ],
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      {
        answer: "1. JavaScript",
        correct: false,
      },
      {
        answer: "2. terminal/bash",
        correct: false,
      },
      {
        answer: "3. for loops",
        correct: false,
      },
      {
        answer: "4. console.log",
        correct: true,
      },
    ],
  },
];



document
  .getElementById("viewHighScores")
  .addEventListener("click", function () {
    viewHighScores();
  });

var numberOfQuestions = question.length;

function reset() {
  wrongAnswer = false;
  timerIsZero = false;
  allAnswered = false;
  finalTime = 0;
  questionNumber = 1;
  lastQuestionWrong = false;
  leftQuiz = false;
}

function homePage() {
  reset();
  below.hidden = true;
  document.getElementById("countdownSpan").hidden = true;
  quiz.innerHTML = `
  <div id='homePage'>
    <h2 id='title'>
        JavaScript Quiz
    </h2>
    <button id='startQuiz' class='quizButtons'> Start Quiz </button>
  </div>`;

  document.getElementById("startQuiz").addEventListener("click", function () {
    questionPage(question[questionNumber - 1]);
    quizTimer();
    document.getElementById("countdownSpan").hidden = false;
  });
}

function questionPage(theQuestion) {
  var currentQuestion = theQuestion;

  quiz.innerHTML = `
    <div style= 'display: flex; justify-content: center'>
    <div>
      <h2>
          ${theQuestion.title}
      </h2>
      <div style= 'display: flex; justify-content: center'>
      <ul id='answers'>
          <li><button id="submitAnswer1" class='quizButtons'> ${theQuestion.answers[0].answer} </button></li>
          <li><button id="submitAnswer2" class='quizButtons'> ${theQuestion.answers[1].answer} </button></li>
          <li><button id="submitAnswer3" class='quizButtons'> ${theQuestion.answers[2].answer} </button></li>
          <li><button id="submitAnswer4" class='quizButtons'> ${theQuestion.answers[3].answer} </button></li>
      </ul>
      </div>
    </div>
    </div>
    `;
    below.innerHTML = `
    <div style='display: flex; justify-content: center'>
    <button id='return' class='quizButtons'>Exit Quiz</button>
    </div>
    
      
    `;
    // <p id='wrong'>Incorrect</p>
    // <p id='right'>Correct</p>
    below.hidden = false;
    document.getElementById("return").addEventListener("click", function () {
      document.getElementById("countdownSpan").hidden = true;
      homePage();
    });
    // var correct = document.getElementById('right');
    // var incorrect = document.getElementById('wrong');

  // function correctAnswer() {
  //   console.log('running correct Answer');
    
  //   }
  // function incorrectAnswer() {
  //   console.log(incorrect);
    
  // }
    function selectAnswer(i) {
      if (questionNumber === numberOfQuestions) {
        //will also end the quiz and stop the timer
        allAnswered = true;
      } else {
        questionNumber++;
        //increases the question index, going to a page generated based on the next object in the question array
        if (currentQuestion.answers[i].correct) {
          //checks the current question answer at the 0 index (first answer, this is a boolean)
          // correct.style.fontSize = '50px';
          // incorrect.style.display='none';
          // console.log(correct);
          // console.log(incorrect);
          questionPage(question[questionNumber - 1]);
        } else {
          //if the answer is not true, sets the wrong answer variable to true, still goes to the next page
          
          incorrect.style.fontSize = '50px';
          correct.style.display='none';
          if (questionNumber === 5) {
            lastQuestionWrong = true;
          }
          questionPage(question[questionNumber - 1]);
        }
      }
      if (allAnswered) {
        recordResults();
      }
    }
    document
      .getElementById("submitAnswer1")
      .addEventListener("click", function () {
        selectAnswer(0);
      });
    document
      .getElementById("submitAnswer2")
      .addEventListener("click", function () {
        selectAnswer(1);
      });
    document
      .getElementById("submitAnswer3")
      .addEventListener("click", function () {
        selectAnswer(2);
      });
    document
      .getElementById("submitAnswer4")
      .addEventListener("click", function () {
        selectAnswer(3);
      });
  }

function quizTimer() {
  timeLeft = 100;
  var timeInterval = setInterval(function () {
    if (wrongAnswer) {
      timeLeft -= 10;
      wrongAnswer = false;
    }

    if (leftQuiz) {
      document.getElementById("countdownSpan").hidden = true;
      clearInterval(timeInterval);
      reset();
    }

    if (allAnswered) {
      //will store the final time once all questions have been answered, then clears the timer interval

      finalTime = timeLeft;
      clearInterval(timeInterval);
    }
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      timerIsZero = true;
      recordResults();

      //generate a button that allows user to exit the quiz
    }
  }, 1000);
}

function recordResults() {
  below.hidden = true;
  if (lastQuestionWrong) {
    timeLeft -= 10;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }
  finalTime = timeLeft;
  timerEl.style.display = "none";
  quiz.innerHTML = `
  <div id='initialsPage'>
  <h2>All Done!</h2>
  <p>Your final score is ${finalTime}!</p>
  <form>
    <div>
      <p>Enter Initials: </p>
      <input id="submissionBar" class="quizBar" type="text" name="text"/> 
      <button onclick="getUserInput()"id="submitResults"class="quizButtons"> Submit </button> 
    </div>
  </form>
  </div>
  `;
}

function getUserInput() {
  var initials = document.getElementById("submissionBar").value;
  storeScore(initials, finalTime);
  // if (highScores.length >= 10 && finalTime > lowestScore) {
  //   replaceBottomScore(finalTime, lowestScore)
  // }
  // function replaceBottomScore(newScore, lowest) {
  //   for (i in highScores) {

  //   }
  // }
}

function sortScores() {
  console.log(highScores);
  if (highScores) {
    highScores.sort((a, b) => b.score - a.score);
  }
}

function storeScore(initials, finalTime) {
  if (localStorage.length > 0) {
    highScores = JSON.parse(window.localStorage.getItem("High Scores"));
  } else {
    highScores = [];
  }

  let scoreInitialPair = {
    initials: initials,
    score: finalTime,
  };

  highScores.push(scoreInitialPair);
  localStorage.setItem("High Scores", JSON.stringify(highScores));
}

function viewHighScores() {
  below.hidden = true;
  leftQuiz = true;
  highScores = JSON.parse(localStorage.getItem("High Scores"));
  sortScores();
  quiz.innerHTML = `
  <div id='highScores'>
    <h2 style="text-align: center">Scores</h2>
    <ul id='hsUl'>
    </ul>
  </div>
  <div id='scorePageButtons'>
  <button id='clearScores' class='quizButtons'>Clear Scores</button>
  <button id='return' class='quizButtons'>Start Page</button>
  </div>
  `;
  if (highScores) {
    let highScoresList = document.getElementById("hsUl");
    for (let i = 0; i < highScores.length; i++) {
      var scoreListItem = document.createElement("li");
      scoreListItem.setAttribute("class", "hsLi");
      var liText = document.createTextNode(
        `${highScores[i].initials}: ${highScores[i].score}`
      );
      scoreListItem.appendChild(liText);
      highScoresList.appendChild(scoreListItem);
    }
    document
      .getElementById("clearScores")
      .addEventListener("click", function () {
        var hsUl = document.getElementById("hsUl");
        while (hsUl.hasChildNodes()) {
          hsUl.removeChild(hsUl.firstChild);
        }
        localStorage.clear();
      });
  }

  document.getElementById("return").addEventListener("click", function () {
    homePage();
  });
}

//need to add a way to save high scores in local storage in order to keep track of them

//need to finish a timer function, build it first, don't worry about specifics like how long it will be or how much time is subtracted per wrong answer

//to determine when timer should be lowered due to wrong answer, create boolean variable that is false by default
//timer will check that variable every iteration
//when a question is answered wrong, the variable becomes true
//if the variable is true when the timer function checks it, time is subtracted, the variable is reverted to false
homePage();
