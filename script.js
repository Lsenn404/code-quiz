var quiz = document.getElementById("quiz");
var timerEl = document.getElementById('countdown');
var answer





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
  }
]





function homePage() {
  quiz.innerHTML = `
    <p>
        My Quiz
    </p>
    <button id='startQuiz'> Start Quiz </button>`

  document.getElementById('startQuiz').addEventListener('click', function () {
    questionPage(question[0])
    quizTimer()
  })
}

function questionPage(theQuestion) {
  
  quiz.innerHTML = `
    
    <p>
        ${theQuestion.title}
    </p>
    <ul>
        <li><button id="submitAnswer"> ${theQuestion.answers[0].answer} </button></li>
        <li><button> ${theQuestion.answers[1].answer} </button></li>
        <li><button> ${theQuestion.answers[2].answer} </button></li>
        <li><button> ${theQuestion.answers[3].answer} </button></li>
    </ul>
    `
 
  
}

function quizTimer() {
  var timeLeft = 90;
  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }
    else {
      clearInterval(timeInterval);
    }
    console.log(timeLeft)
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


/*
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
*/