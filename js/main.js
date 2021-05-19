var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-btn')
var score = 0;

let shuffleQuestions, currentQuestionIndex 


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide') 
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0 
    score = 0;
    shuffleQuestions = questions.sort(() => Math.random() - .5) 
    questionContainerElement.classList.remove('hide') 
    nextQuestion()
} 

function nextQuestion() { 
    showQuestion(shuffleQuestions[currentQuestionIndex])
} 

function showQuestion(question) {
    questionElement.innerText = question.question 
    answerButtonsElement.innerHTML=""
    question.answers.forEach(answer => {
        var button = document.createElement('button') 
        button.innerText = answer.text 
        button.classList.add('btn') 
        // if (answer.correct) {
            button.dataset.correct = answer.correct
        // } 
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild 
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target 
    var correct = selectedButton.dataset.correct 
    setStatusClass(selectedButton, correct)
    // Array.from(answerButtonsElement.children).forEach(button => {
        
    // })  
    currentQuestionIndex++; 
    setInterval(() => {
        if( currentQuestionIndex < questions.length){
            nextQuestion() 
        } else {
            // finish the game here 
        } 
    }, 2000);
    
    
    
} 

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct === "true") {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
} 

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
} 



var questions = [
    {
        question: 'How do you write "hello world" in an alert box?', 
        answers:[
            { text: 'alert("hello world"):', correct: true},
            { text: 'msg("hello world"):', correct: false},
            { text: 'msgBox("hello world"):', correct: false},
            { text: 'Box("hello world"):', correct: false},
            
        ]
    },

    {
        question: 'How do you add a comment in JavaScript?', 
        answers:[
            { text: '//This is a comment', correct: true},
            { text: '{This is a comment}', correct: false},
            { text: '^This is a comment', correct: false},
            { text: '<This is a comment>', correct: false},
            
        ]
    },

    {
        question: 'JavaScript is the same as Java', 
        answers:[ 
            { text: 'true', correct: false},
            { text: 'false', correct: true},
            { text: 'sometimes', correct: false},
            { text: 'ish', correct: false},
        ]
    }
]