document.addEventListener("DOMcontent loaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("date-type") === "submit" ) {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }


})



function runGame() {

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