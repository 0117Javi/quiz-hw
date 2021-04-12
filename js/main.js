var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-button')

let shuffleQuestions, currentQuestionIndex 


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('it worked!')
    startButton.classList.add('hide') 
    questionContainerElement.classList.remove('hide')
    shuffleQuestions = question.sort(() => Math.random() - .5) 
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') 
    nextQuestion()
} 

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
} 

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button') 
        button.innerText = answer.text 
        button.classList.add('btn') 
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild 
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target 
    var correct = selectedButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
} 

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var question = [
    {
        question: 'How so you write "hello world" in an alert box?', 
        answers:[
            { text: 'alert("hello world"):', correct: true},
            { text: 'msg("hello world"):', correct: false},
            { text: 'msgBox("hello world"):', correct: false},
            { text: 'Box("hello world"):', correct: false},
            
        ]
    }
]
var question = [
    {
        question: 'How do you add a comment in JavaScript?', 
        answers:[
            { text: '//This is a comment', correct: true},
            { text: '{This is a comment}', correct: false},
            { text: '^This is a comment', correct: false},
            { text: '<This is a comment>', correct: false},
            
        ]
    }
]
var question = [
    {
        question: 'JavaScript is the same as Java', 
        answers:[ 
            { text: 'true', correct: true},
            { text: 'false', correct: false},
            { text: 'sometimes', correct: false},
            { text: 'ish', correct: false},
        ]
    }
]