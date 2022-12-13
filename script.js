//document all elements that we will be changing
let currentQuestion = document.getElementById("questionHeading");
let objectAnswer1 = document.getElementById("answer1");
let objectAnswer2 = document.getElementById("answer2");
let objectAnswer3 = document.getElementById("answer3");
let objectAnswer4 = document.getElementById("answer4");
let playNow = document.getElementById("startButton");
let tallyTotal = document.getElementById("tally");
let currentScore = document.getElementById("currentScore");
let highScores = document.getElementById("highScores");
let timer = document.getElementById("timer");
let answersList = document.getElementById("answersList");

highScores.addEventListener("click", scoresChart());
playNow.addEventListener("click", () => {
    beginQuiz();
    countdown();
});

//variables to count
let i = 0;
let win = 0;
let lose = 0;
let timeLeft = 0;
let score = 0;
let key = "";

document.addEventListener('keydown', function (event) {
    if (timeLeft === 0) {
        return;
    }
    // Access value of pressed key with key property
    key = event.key.toLowerCase();
    let abcd = "abcd".split("");

    if (abcd.includes(key)) {
        console.log(key);
        checkInput();
    }

});



//create an object for each question
let questionObjects = [
    {
        question: "Commonly used data types does NOT include which of the following?",
        answer1: "Alerts",
        answer2: "Strings",
        answer3: "Booleans",
        answer4: "Numbers",
        correctAnswer: "a"
    },
    {
        question: "second question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "b"
    },
    {
        question: "third question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "c"
    },
    {
        question: "fourth question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "d"
    },
    {
        question: "fifth question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "a"
    }
]
//Function to begin quiz and change DOM initially
function beginQuiz() {
    answersList.style = "visibility: hidden;"
    if (i === questionObjects.length) {
        alert("That's all, folks!");
        reportResults();
        return;
    }
    tallyTotal.innerHTML = "Correct: " + win + "  Incorrect: " + lose;
    playNow.innerHTML = "Think you know it? Hit the key that corresponds to your answer! (abcd)";
    currentQuestion.innerHTML = questionObjects[i].question;
    objectAnswer1.innerHTML = questionObjects[i].answer1;
    objectAnswer2.innerHTML = questionObjects[i].answer2;
    objectAnswer3.innerHTML = questionObjects[i].answer3;
    objectAnswer4.innerHTML = questionObjects[i].answer4;
}
function checkInput() {
    score = 5000 / timeLeft * win;
    currentScore.innerHTML = "Your Score is " + Math.floor(score);
    if (key == questionObjects[i].correctAnswer) {
        alert("Correct!");
        win = win + 1;
    } else {
        alert("Incorrect, you'll get 'em next time...");
        lose = lose + 1;
    } i = i + 1; beginQuiz();
}

function reportResults() {
    console.log(win);
    console.log(lose);
    console.log(timeLeft);
}

function countdown() {
    timeLeft = 180;
    let timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining."
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "";
            alert("Time's Up!")
            reportResults();
        } else if (i === questionObjects.length) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function scoresChart() {

}


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score