var quiz = document.getElementById("quiz");
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

function logAnswer() {
    document.getElementById('submitAnswer').addEventListener('click' ,function ()  {

    })
}

homePage();