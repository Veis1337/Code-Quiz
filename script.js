//document all elements that we will be changing
let currentQuestion = document.getElementById("questionHeading");
let objectAnswer1 = document.getElementById("answer1");
let objectAnswer2 = document.getElementById("answer2");
let objectAnswer3 = document.getElementById("answer3");
let objectAnswer4 = document.getElementById("answer4");
let playNow = document.getElementById("startButton");
playNow.addEventListener("click", beginQuiz);


//create an object for each question
let questionObjects = [
    {
        question: "first question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "A"
    },
    {
        question: "second question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "B"
    },
    {
        question: "third question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "C"
    },
    {
        question: "fourth question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "D"
    },
    {
        question: "fifth question",
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
        correctAnswer: "A"
    }
]

//Create a function that will pull a random object from questionObjects,
//and append/replace the attributes to their respective HTML elements on the DOM
function beginQuiz() {
    for (i = 0; i < questionObjects.length; i++) {
        currentQuestion.innerHTML = questionObjects[i].question;
        objectAnswer1.innerHTML = questionObjects[i].answer1;
        objectAnswer2.innerHTML = questionObjects[i].answer2;
        objectAnswer3.innerHTML = questionObjects[i].answer3;
        objectAnswer4.innerHTML = questionObjects[i].answer4;
        let userInput = window.prompt("A, B, C, or D?");
            if (userInput == questionObjects[i].correctAnswer) {
                console.log("Correct");
            } else {
                console.log("Incorrect");
            }
    } 
}


// for (let i = 0; i < questionObjects.length; i++){
//     currentQuestion.innerHTML = questionObjects[i].question;
//     console.log(i);
// }











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