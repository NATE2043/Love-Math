document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("date-type") === "submit" ) {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }


})



function runGame() {
    
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function CalculateCorrectanswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function DisplayAdditionquestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}