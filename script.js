var quiz = document.getElementById("quiz");
var timerEl = document.getElementById('countdown');
var wrongAnswer = false; //keeps track if the quiz taker has input a wrong answer, becomes true if they have, and the timer function will detect when this is true, subtract time, then return this variable to false
var questionIndex = 0;
var timerIsZero = false; //create a boolean to check if the timer has hit 0, allows the user to select an answer so long as the timer hasn't hit 0, if the timer has hit 0, generate a button that allows them to exit the quiz
var allAnswered = false; //tracks if all questions have been answered
var finalTime;
var correctAnswers = 0;


var question = [
  {
    title: 'Question 1: What is 10 x 10?',
    answers: [{
      answer: 1,
      correct: false
    }, {
      answer: 20,
      correct: false
    }, {
      answer: 50,
      correct: false
    }, {
      answer: 100,
      correct: true
    }]
  },
  {
    title: 'Question 2: What is 20 x 20?',
    answers: [{
      answer: 20,
      correct: false
    },
    {
      answer: 200,
      correct: false
    },
    {
      answer: 400,
      correct: true

    },
    {
      answer: 800,
      correct: false
    }]
  },
  {
    title: 'Question 3: ?',
    answers: [{
      answer: 20,
      correct: false
    },
    {
      answer: 200,
      correct: false
    },
    {
      answer: 400,
      correct: true

    },
    {
      answer: 800,
      correct: false
    }]
  },
  {
    title: 'Question 4: ?',
    answers: [{
      answer: 20,
      correct: false
    },
    {
      answer: 200,
      correct: false
    },
    {
      answer: 400,
      correct: true

    },
    {
      answer: 800,
      correct: false
    }]
  },
  {
    title: 'Question 5: ?',
    answers: [{
      answer: 20,
      correct: false
    },
    {
      answer: 200,
      correct: false
    },
    {
      answer: 400,
      correct: true

    },
    {
      answer: 800,
      correct: false
    }]
  }
]

var numberOfQuestions = question.length;



function homePage() {
  quiz.innerHTML = `
    <p>
        My Quiz
    </p>
    <button id='startQuiz'> Start Quiz </button>`

  document.getElementById('startQuiz').addEventListener('click', function () {
    questionPage(question[questionIndex])
    quizTimer()
  })
}

function questionPage(theQuestion) {
  var currentQuestion = theQuestion;
  quiz.innerHTML = `
    
    <p>
        ${theQuestion.title}
    </p>
    <ul>
        <li><button id="submitAnswer1"> ${theQuestion.answers[0].answer} </button></li>
        <li><button id="submitAnswer2"> ${theQuestion.answers[1].answer} </button></li>
        <li><button id="submitAnswer3"> ${theQuestion.answers[2].answer} </button></li>
        <li><button id="submitAnswer4"> ${theQuestion.answers[3].answer} </button></li>
    </ul>
    `

  function selectAnswer(i) {
    console.log('Current Question-1: ' + currentQuestion-1)
    if (timerIsZero) {
      window.alert('You can no longer answer questions once the timer hits 0');
    }
    else if (currentQuestion-1 === numberOfQuestions)  {
      //will also end the quiz and stop the timer
      allAnswered = true;
    }
    else {
      questionIndex++; //increases the question index, going to a page generated based on the next object in the question array
      if (currentQuestion.answers[i]) { //checks the current question answer at the 0 index (first answer, this is a boolean)
        questionPage(question[questionIndex])
      }
      else { //if the answer is not true, sets the wrong answer variable to true, still goes to the next page
        wrongAnswer = true;
        questionPage(question[questionIndex])
      }
    }
  }
  document.getElementById('submitAnswer1').addEventListener('click', function () {
    selectAnswer(0)

  })
  document.getElementById('submitAnswer2').addEventListener('click', function () {
    selectAnswer(1)

  })
  document.getElementById('submitAnswer3').addEventListener('click', function () {
    selectAnswer(2)

  })
  document.getElementById('submitAnswer4').addEventListener('click', function () {
    selectAnswer(3)

  })

}

function quizTimer() {
  var timeLeft = 15;
  var timeInterval = setInterval(function () {
    if (allAnswered) { //will store the final time once all questions have been answered, then clears the timer interval
      finalTime = timeLeft;
      clearInterval(timeInterval)
    }
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining'
      timeLeft--;
    }
    else {
      timerEl.textContent = 'Game Over!'
      clearInterval(timeInterval);
      timerIsZero = true;
      //generate a button that allows user to exit the quiz
    }
  }, 1000);

}



function logAnswer() {
  document.getElementById('submitAnswer').addEventListener('click', function () {
    //if the answer is correct, add one to score
    //else subtract time from the clock
    //then (outside the if else statement) move on to the next page
  })
}

//need to add a way to save high scores in local storage in order to keep track of them

//need to finish a timer function, build it first, don't worry about specifics like how long it will be or how much time is subtracted per wrong answer

//to determine when timer should be lowered due to wrong answer, create boolean variable that is false by default
//timer will check that variable every iteration
//when a question is answered wrong, the variable becomes true
//if the variable is true when the timer function checks it, time is subtracted, the variable is reverted to false
homePage();