var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-btn");
var endGameElement = document.getElementById("highscore");
var displayWinners = document.getElementById("winners");
var saveNamesElement = document.getElementById("saveBtn");
var nameFieldElement = document.getElementById("nameField");
var lastFieldElement = document.getElementById("playAgain");
var replayBtn = document.getElementById("rePlay");
var score = 0;
var timeLeft = 60;
var questionNumber = 1;
let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
playAgain.addEventListener("click", startGame);

saveNamesElement.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("u got clicked!", nameFieldElement.value);
  console.log("score", score);
  var winners = [];
  if (localStorage.getItem("higheScore")) {
    winners = JSON.parse(localStorage.getItem("higheScore"));
  }
  winners.push({
    name: nameFieldElement.value,
    score: score,
  });
  var str = JSON.stringify(winners);
  localStorage.setItem("higheScore", str);
});

function displayPastWinners() {
  var ppl = JSON.parse(localStorage.getItem("higheScore"));

  for (let i = 0; i < ppl.length; i++) {
    var h1 = document.createElement("h1");
    h1.innerText = ppl[i].name + " " + ppl[i].score + " ";
    displayWinners.appendChild(h1);
  }
}

function timer() {
  display();
  startGame();
  var timer = document.querySelector("#timer");
  var timerInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    timer.textContent = "time: " + timeLeft;
    if (timeleft <= 0) {
      endQuiz();
      clearInterval(timerInterval);
    }
  }, interval);
}

function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  questionContainerElement.classList.remove("hide");
  /*
    if (questionNumber > 3){
        //we stop asking the user questions and tally up the scores and display it
    }else {
        nextQuestion();
    }
    */
  nextQuestion();
}

function endGame() {
  console.log("inside game over func!");
  questionContainerElement.classList.add("hide");
  endGameElement.classList.remove("hide");
  lastFieldElement.classList.remove("hide");
  displayPastWinners();
}

function lastField() {
  questionContainerElement.classList.add("hide");
  endGameElement.classList.add("hide");
  lastFieldElement.classList.remove("hide");
}

function nextQuestion() {
  //questionNumber++;
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    // if (answer.correct) {
    button.dataset.correct = answer.correct;
    // }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(selectedButton, correct);
  // Array.from(answerButtonsElement.children).forEach(button => {

  // })
  currentQuestionIndex++;
  setTimeout(() => {
    if (currentQuestionIndex < questions.length) {
      nextQuestion();
    } else {
      // finish the game here
      console.log("gameover timeee");
      endGame();
    }
  }, 2000);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === "true") {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

var questions = [
  {
    question: 'How do you write "hello world" in an alert box?',
    answers: [
      { text: 'alert("hello world"):', correct: true },
      { text: 'msg("hello world"):', correct: false },
      { text: 'msgBox("hello world"):', correct: false },
      { text: 'Box("hello world"):', correct: false },
    ],
  },

  {
    question: "How do you add a comment in JavaScript?",
    answers: [
      { text: "//This is a comment", correct: true },
      { text: "{This is a comment}", correct: false },
      { text: "^This is a comment", correct: false },
      { text: "<This is a comment>", correct: false },
    ],
  },

  {
    question: "JavaScript was made using c++",
    answers: [
      { text: "maybe", correct: false },
      { text: "true", correct: false },
      { text: "c#", correct: false },
      { text: "false", correct: true },
    ],
  },
  {
    question: "JavaScript can run docker",
    answers: [
      { text: "false", correct: true },
      { text: "Ruby", correct: false },
      { text: "maybe", correct: false },
      { text: "true", correct: false },
    ],
  },
  {
    question: "JavaScript is fun",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: false },
      { text: "sometimes", correct: true },
      { text: "ish", correct: false },
    ],
  },
  {
    question: "JavaScript files are shown in as",
    answers: [
      { text: ".java", correct: false },
      { text: ".js", correct: true },
      { text: ".script", correct: false },
      { text: ".db", correct: false },
    ],
  },
];
