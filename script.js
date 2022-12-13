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

playNow.addEventListener("click", () => {
    beginQuiz();
    countdown();
});

//variables that will be manipulated
let i = 0;
let win = 0;
let lose = 0;
let timeLeft = 0;
let score = 0;
let key = "";
let userInitials = "";
let userScore = 0;

//Adding in keydown event for answering questions
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



//Created an object for each question
let questionObjects = [
    {
        question: "Commonly used data types does NOT include which of the following?",
        answer1: "a-  Alerts",
        answer2: "b-  Strings",
        answer3: "c-  Booleans",
        answer4: "d-  Numbers",
        correctAnswer: "a"
    },
    {
        question: "What do we use to separate attributes from one another when creating Objects with JavaScript?",
        answer1: "a-  semicolons;",
        answer2: "b-  commas,",
        answer3: "c-  hashtags#",
        answer4: "d-  parentheses()",
        correctAnswer: "b"
    },
    {
        question: "What does it mean to Concatenate something in JavaScript?",
        answer1: "a-  Con is the latin root for together... To eat together with cats!",
        answer2: "b-  To focus intently on it.",
        answer3: "c-  To link it together with something else.",
        answer4: "d-  To break it down into smaller parts.",
        correctAnswer: "c"
    },
    {
        question: "Which of the following can be manipulated in the DOM with JavaScript?",
        answer1: "a-  Headings",
        answer2: "b-  Paragraphs",
        answer3: "c-  Images",
        answer4: "d-  All of the above",
        correctAnswer: "d"
    },
    {
        question: "Which of the following is NOT an assignment operator in JavaScript?",
        answer1: "a-  equals",
        answer2: "b-  =",
        answer3: "c-  ==",
        answer4: "d-  ===",
        correctAnswer: "a"
    }
]
//Checking to see if we still have questions unused
function beginQuiz() {
    answersList.style = "visibility: hidden;"
    if (i === questionObjects.length) {
        tallyTotal.innerHTML = "Correct: " + win + "  Incorrect: " + lose;
        reportResults();
    } else {
        tallyTotal.innerHTML = "Correct: " + win + "  Incorrect: " + lose;
        playNow.innerHTML = "Think you know it? Hit the key that corresponds to your answer! (abcd)";
        currentQuestion.innerHTML = questionObjects[i].question;
        objectAnswer1.innerHTML = questionObjects[i].answer1;
        objectAnswer2.innerHTML = questionObjects[i].answer2;
        objectAnswer3.innerHTML = questionObjects[i].answer3;
        objectAnswer4.innerHTML = questionObjects[i].answer4;
    }
}
//Checks the keydown input against correct answer
function checkInput() {
    score = Math.floor(timeLeft * win);
    currentScore.innerHTML = "Your Score is " + score;
    if (key == questionObjects[i].correctAnswer) {
        win = win + 1;
        i = i + 1;
        alert("Correct!");

    } else {
        timeLeft = timeLeft - 20; //Reduces timer when incorrect
        lose = lose + 1;
        i = i + 1;
        alert("Incorrect, 20 seconds deducted from timer...");
    } beginQuiz();
}

function reportResults() {
    playNow.addEventListener("click", logScores);
    playNow.innerHTML = "Click here to log your score and initials";
    currentQuestion.innerHTML = "Thanks for Playing!";
    objectAnswer1.innerHTML = "Your final score: " + score;
    objectAnswer2.innerHTML = ""
    objectAnswer3.innerHTML = ""
    objectAnswer4.innerHTML = ""
}
//Created timer that will begin on quiz start and end on quiz finish
function countdown() {
    timeLeft = 120;
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
//Logs scores and initials to Local Storage
function logScores() {
    userInitials = window.prompt("Please enter your initials");
    localStorage.setItem("user-initials", userInitials);
    localStorage.setItem("user-score", score);
}
//Outputs scores and initials from Local Storage
function scoresChart() {
    objectAnswer2.innerHTML = "High Score on Local Storage"
    objectAnswer3.innerHTML = "Belongs to..."
    if (!localStorage.getItem("user-initials")) {
        objectAnswer4.innerHTML = "No one... Yet!";
    } else {
        objectAnswer4.innerHTML = localStorage.getItem("user-initials") + " : " + localStorage.getItem("user-score");
    }
}