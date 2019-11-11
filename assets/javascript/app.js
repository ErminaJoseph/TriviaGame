$(document).ready(function() { 
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var timer = 30;
    var intervalId;

    var questionAndAnswers = {
        questions: {
            q1: "Why does Robin hate going to the mall?",
            q2: "What does Lily's father do for a living?",
            q3: "Which singer/actress did not guest star on the show?",
            q4: "What was the name of Ted's high school sweetheart?",
            q5: "What is Barney's catch word",
            q6: "What college did Ted, Marshall, and Lily attend?",
            q7: "At what type of event would you not find Barney in a suit?",
            q8: "What is Ted's middle name?",
            q9: "Where is Marshall from?",
            q10: "What did Ted say to Robin on their first date?"
        },
        choices: {
            c1: ["She was mugged at the mall", "She toured every mall in Canada as a pop singer", "She was banned at the mall for stealing", "She couldn't stop eating Cinnabons"],
            c2: ["Designs board games", "Creates unique desserts", "Software Engineer", "He doesn't work"],
            c3: ["Jennifer Lopez", "Carrie Underwood", "Katy Perry", "All of the above"],
            c4: ["Cassie", "Kathy", "Karen", "Kelly"],
            c5: ["Legendary", "Epic", "Exhiliarting", "None of the above" ],
            c6: ["UCONN", "Wesleyan", "Qunnipiac", "Yale"],
            c7: ["Weddings", "Football Games", "Funerals", "Concerts"],
            c8: ["Cecil", "Evelyn", "James", "Albert"],
            c9: ["St. Cloud, MN", "St. Paul, MN", "St. Michael, MN", "St. Joseph, MN"],
            c10: ["Marry me", "This was a mistake", "I love you", "I won't call you"]
        },
        answers: {
            a1: "She toured every mall in Canada as a pop singer",
            a2: "Designs board games",
            a3: "All of the above",
            a4: "Karen",
            a5: "Legendary",
            a6: "Wesleyan",
            a7: "Funerals",
            a8: "Evelyn",
            a9: "St. Cloud, MN",
            a10: "I love you",
        },
    }


    
    $("#get-started").on("click", function () {
        $("#display").empty();
        startGame ();
    });

    $("#choice-one").on("click", function () {
        nextQuestion ();
        console.log("hey");
    });


    function startGame () {
        $("#display").html("Time Left: " + timer);
        $("#question").html(questionAndAnswers.questions.q1);
        $("#choice-one").append(questionAndAnswers.choices.c1[0]);
        $("#choice-two").append(questionAndAnswers.choices.c1[1]);
        $("#choice-three").append(questionAndAnswers.choices.c1[2]);
        $("#choice-four").append(questionAndAnswers.choices.c1[3]);
    }

    function nextQuestion () {
    for (i = 1; i < questionAndAnswers.questions.length; i++) {
        timer = 30;
        $("#display").html("Time Left: " + timer);
        $("#question").html(questionAndAnswers.questions[i]);
        $("#choice-one").append(questionAndAnswers.choices.c[i[0]]);
        $("#choice-two").append(questionAndAnswers.choices.c[i[1]]);
        $("#choice-three").append(questionAndAnswers.choices.c[i[2]]);
        $("#choice-four").append(questionAndAnswers.choices.c[i[3]]);
        }
    }
});