$(document).ready(function() { 
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var timer = 31;
    var timerID;
    var userChoice;
    var index = 0;

    var questionAndAnswers = [{
            question: "Why does Robin hate going to the mall?", 
            answer: "She toured every mall in Canada as a pop singer",
            choices: ["She was mugged at the mall", "She toured every mall in Canada as a pop singer", "She was banned at the mall for stealing", "She couldn't stop eating Cinnabons"],
        }, {
            question: "What does Lily's father do for a living?",
            answer: "Designs board games",
            choices: ["Designs board games", "Creates unique desserts", "Software Engineer", "He doesn't work"],
        }, {
            question: "Which singer/actress did not guest star on the show?",
            answer: "All of the above",
            choices: ["Jennifer Lopez", "Carrie Underwood", "Katy Perry", "All of the above"],
        }, {
            question: "What was the name of Ted's high school sweetheart?",
            answer: "Karen",
            choices: ["Cassie", "Kathy", "Karen", "Kelly"],
        }, {
            question: "What is Barney's catch word",
            answer: "Legendary",
            choices: ["Legendary", "Epic", "Exhiliarting", "None of the above" ],
        }, {
            question: "What college did Ted, Marshall, and Lily attend?",
            answer: "Wesleyan",
            choices: ["UCONN", "Wesleyan", "Qunnipiac", "Yale"],
        }, {
            question: "At what type of event would you not find Barney in a suit?",
            answer: "Funerals",
            choices: ["Weddings", "Football Games", "Funerals", "Concerts"],
        }, {
            question: "What is Ted's middle name?",
            answer: "Evelyn",
            choices: ["Cecil", "Evelyn", "James", "Albert"],
        }, {
            question: "Where is Marshall from?",
            answer: "St. Cloud, MN",
            choices: ["St. Cloud, MN", "St. Paul, MN", "St. Michael, MN", "St. Joseph, MN"],
        }, {
            question: "Why does Robin hate going to the mall?",
            answer: "I love you",
            choices: ["Marry me", "This was a mistake", "I love you", "I just want to be casual"]
        }]


    $("#get-started").on("click", function () {
        startGame ();
    });

    $("#choice-one").on("click", function() {
        console.log("Yes");
        userChoice = $(this).text();
        console.log(userChoice);
        console.log(questionAndAnswers[index].answer);
        if (userChoice === questionAndAnswers[index].answer) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    });

    $("#choice-two").on("click", function() {
        console.log("Yes");
        userChoice = $(this).text();
        console.log(userChoice);
        console.log(questionAndAnswers[index].answer);
        if (userChoice === questionAndAnswers[index].answer) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    });

    $("#choice-three").on("click", function() {
        console.log("Yes");
        userChoice = $(this).text();
        console.log(userChoice);
        if (userChoice === questionAndAnswers[index].answer[index]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    });

    $("#choice-four").on("click", function() {
        console.log("Yes");
        userChoice = $(this).text();
        console.log(userChoice);
        if (userChoice === questionAndAnswers[index].answer[index]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    });

    function decrement () {
        timer--;
        $("#display").html("Time Remaining: " + timer);

        if (timer === 0) {

        }
    }

    function startGame () {
        $("#display").empty()
        timerID = setInterval(decrement, 1000);
        $("#question").html(questionAndAnswers[0].question);
        $("#choice-one").html(questionAndAnswers[0].choices[0]);
        $("#choice-two").html(questionAndAnswers[0].choices[1]);
        $("#choice-three").html(questionAndAnswers[0].choices[2]);
        $("#choice-four").html(questionAndAnswers[0].choices[3]);
    }


    function correctAnswer () {
        $("#choices").html("You are correct!")
        correctAnswers++;

    }

    function incorrectAnswer () {
        $("#choices").html("Sorry, that is incorrect!")
        incorrectAnswers++;

    }
});