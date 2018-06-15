$(document).ready(function () {

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    function results() {

        let q1 = $('input[type=radio][name="q1"]:checked').val();
        let q2 = $('input[type=radio][name="q2"]:checked').val();
        let q3 = $('input[type=radio][name="q3"]:checked').val();
        let q4 = $('input[type=radio][name="q4"]:checked').val();
        let q5 = $('input[type=radio][name="q5"]:checked').val();
        let q6 = $('input[type=radio][name="q6"]:checked').val();
        let q7 = $('input[type=radio][name="q7"]:checked').val();
        let q8 = $('input[type=radio][name="q8"]:checked').val();

        if (q1 === 'a') {
            correct++;
        } else if (q1 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q2 === 'c') {
            correct++;
        } else if (q2 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q3 === 'c') {
            correct++;
        } else if (q3 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q4 === 'c') {
            correct++;
        } else if (q4 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q5 === 'b') {
            correct++;
        } else if (q5 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q6 === 'a') {
            correct++;
        } else if (q6 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q7 === 'c') {
            correct++;
        } else if (q7 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }


        if (q8 === 'd') {
            correct++;
        } else if (q8 === undefined) {
            unanswered++;
        } else {
            wrong++;
        }

    }

    //start game function

    function startTrivia() {
        $('#start').hide();
        $('#trivia').show();
        $('#done').show();
    }

    //timer function
    let counter = 60;
    let time;

    function timer() {
        $('.timer').text('Time Remaining: ' + counter);
        time = setInterval(function () {
            counter--;
            $('.timer').text('Time Remaining: ' + counter);
            if (counter === 0) {
                resultsPage()
            }
        }, 1000);
    };


    //Show results function

    function resultsPage() {
        results();
        clearInterval(time);
        $('#answers').show();
        $('.numCorrect').text('Correct Answers: ' + correct);
        $('.numWrong').text('Wrong Answers: ' + wrong);
        $('.numUnanswered').text('Unanswered: ' + unanswered);
        $('#try-again').show();
        $('#trivia').hide();
        $('#done').hide();
    }
    //Start game

    $('#start').click(function () {
        startTrivia();
        timer();
    });

    //End game

    $('#done').click(function () {
        resultsPage()
    });

    //try again

    $('#try-again').click(function () {
        reset()
        startTrivia();
        $('#answers').hide();
        $('#try-again').hide();
    });

    //reset

    function reset() {
        counter = 60;
        time;
        timer();
        results();
        $('input[type=radio]').prop('checked', false);
        correct = 0;
        wrong = 0;
        unanswered = 0;
        $('.numCorrect').text('Correct Answers: ' + correct);
        $('.numWrong').text('Wrong Answers: ' + wrong);
        $('.numUnanswered').text('Unanswered: ' + unanswered);
    }


})