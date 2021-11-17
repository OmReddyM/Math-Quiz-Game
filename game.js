Username1 = localStorage.getItem("Player1");
Username2 = localStorage.getItem("Player2");

Score1 = 0;
Score2 = 0;

document.getElementById("Player1").innerHTML = Username1 + "-";
document.getElementById("Player2").innerHTML = Username2 + "-";
document.getElementById("Player1Score").innerHTML = Score1;
document.getElementById("Player2Score").innerHTML = Score2;

answer = 0;

function sendNumber(){
    Num1 = document.getElementById("Number1").value;
    Num2 = document.getElementById("Number2").value;
    outputOperation = document.getElementById("Operation").value;
    outputOperation = outputOperation.toLowerCase();
    if (outputOperation == "addition") {
        outputOperation = " + ";
        answer = Num1 + Num2; 
    }else if(outputOperation == "subtraction"){
        outputOperation = " - ";
        answer = Num1 - Num2; 
    }else if(outputOperation == "multiplication"){
        outputOperation = " x ";
        answer = Num1 * Num2; 
    }else if(outputOperation == "division"){
        outputOperation = " ÷ ";
        answer = Num1 / Num2; 
    }
    row = "<h4>" + Num1 + outputOperation + Num2 + "</h4>" + "<br><br>Answer: <input type='number' id='inputBox'><br><br><button onclick='check()'>Check</button>"
    document.getElementById("Output").innerHTML = row;

    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}