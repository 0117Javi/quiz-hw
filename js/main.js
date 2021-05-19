var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-btn')
var score = 0;
var timeLeft = 60;
var questionNumber = 1;
let shuffleQuestions, currentQuestionIndex 


startButton.addEventListener('click', startGame) 

function timer(){
    display(); 
    startGame(); 
    var timer = document.querySelector('#timer') 
    var timerInterval = setInterval(function() {
        timeLeft--; 
        if (timeLeft < 0) {
            timeLeft = 0;
        } 
        timer.textContent = ('time: ' + timeLeft); 
        if(timeleft <= 0){
            endQuiz(); 
            clearInterval(timerInterval);
        }
    }, interval);
}
    


function startGame() {
    startButton.classList.add('hide') 
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0 
    score = 0;
    shuffleQuestions = questions.sort(() => Math.random() - .5) 
    questionContainerElement.classList.remove('hide') 
    /*
    if (questionNumber > 3){
        //we stop asking the user questions and tally up the scores and display it
    }else {
        nextQuestion();
    }
    */
    nextQuestion()
} 

function nextQuestion() { 
    //questionNumber++;
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
        question: 'JavaScript was made using c++', 
        answers:[ 
            { text: 'ish', correct: false},
            { text: 'true', correct: false},
            { text: 'sometimes', correct: false},
            { text: 'false', correct: true},
        ]
    }, 
    {
        question: 'JavaScript can run docker', 
        answers:[ 
           
            { text: 'false', correct: true},
            { text: 'ish', correct: false},
            { text: 'sometimes', correct: false},
            { text: 'true', correct: false},
        ]
    }, 
    {
        question: 'JavaScript is fun', 
        answers:[ 
            { text: 'true', correct: false},
            { text: 'false', correct: false},
            { text: 'sometimes', correct: true},
            { text: 'ish', correct: false},
        ]
    }, 
    {
        question: 'JavaScript files are shown in as', 
        answers:[ 
            { text: '.java', correct: false},
            { text: '.js', correct: true},
            { text: '.script', correct: false},
            { text: '.db', correct: false},
        ]
    } 
]
