Username1 = localStorage.getItem("Player1");
Username2 = localStorage.getItem("Player2");

Score1 = 0;
Score2 = 0;

document.getElementById("Player1").innerHTML = Username1 + "-";
document.getElementById("Player2").innerHTML = Username2 + "-";
document.getElementById("Player1Score").innerHTML = Score1;
document.getElementById("Player2Score").innerHTML = Score2;

questionTurn = "Player1";
answerTurn = "Player2";

document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + Username1;
document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + Username2;

answer = 0;
function sendNumber() {
    Num1 = document.getElementById("Number1").value;
    Num2 = document.getElementById("Number2").value;
    outputOperation = document.getElementById("Operation").value;
    outputOperation = outputOperation.toLowerCase();
    if (outputOperation == "addition") {
        outputOperation = " + ";
        answer = Num1 + Num2;
    } else if (outputOperation == "subtraction") {
        outputOperation = " - ";
        answer = Num1 - Num2;
    } else if (outputOperation == "multiplication") {
        outputOperation = " x ";
        answer = Num1 * Num2;
    } else if (outputOperation == "division") {
        outputOperation = " ÷ ";
        answer = Num1 / Num2;
    } else if (outputOperation == "square") {
        outputOperation = "^"
        answer = Math.pow(Num1, Num2)
    } else {
        alert("Your operation input is not valid. The operation will now be determined via random selection.")
        num = Math.floor(Math.random() * 5);
        if (num == 0) {
            outputOperation = " + ";
            answer = Num1 + Num2;
        } else if (num == 1) {
            outputOperation = " - ";
            answer = Num1 - Num2;
        } else if (num == 2) {
            outputOperation = " x ";
            answer = Num1 * Num2;
        } else if (num == 3) {
            outputOperation = " ÷ ";
            answer = Num1 / Num2;
        } else if (num == 4) {

        }
    }
    row = "<h4>" + Num1 + outputOperation + Num2 + "</h4>" + "<br><br>Answer: <input type='number' id='inputBox'><br><br><button onclick='check()'>Check</button>"
    document.getElementById("Output").innerHTML = row;

    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}
function check() {
    var useranswer = document.getElementById("inputBox").value;
    console.log("Your Answer is " + useranswer);
    if (useranswer == answer) {
        if (answerTurn == "Player1") {
            Score1++;
            document.getElementById("Player1Score").innerHTML = Score1;
        } else {
            Score2++;
            document.getElementById("Player2Score").innerHTML = Score2;
        }
    }
    if (answerTurn == "Player1") {
        answerTurn = "Player2";
        document.getElementById("AnswerTurn").innerHTML = "Answer Turn : " + Username2;
    } else {
        answerTurn = "Player1";
        document.getElementById("AnswerTurn").innerHTML = "Answer Turn : " + Username1;
    }
    if (questionTurn == "Player1") {
        questionTurn = "Player2";
        document.getElementById("QuestionTurn").innerHTML = "Question Turn : " + Username2;
    } else {
        questionTurn = "Player1";
        document.getElementById("QuestionTurn").innerHTML = "Question Turn : " + Username1;
    }
    document.getElementById("Output").innerHTML = "";
}