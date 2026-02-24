console.log("Test Passed");

let resultText = document.querySelector(".container > h1");
let diceImgs = document.querySelectorAll(".container img");

let player1Dice = diceImgs[0];
console.log(player1Dice);

let player2Dice = diceImgs[1];
console.log(player2Dice);


//const rollButton = document.querySelector("input;");
//const potentiallyUnsafeString = "alert('You got mail')";
//rollButton.setAttribute("onclick", potentiallyUnsafeString);

function rollDices() {    

    console.log("Rolling the dice");
    
    let player1DiceNr = Math.floor((Math.random() * 6)) + 1; //random nr between 1-6
    //console.log(player1DiceNr);
    player1Dice.src = "./images/dice" + player1DiceNr + ".png";

    let player2DiceNr = Math.floor((Math.random() * 6)) + 1; //random nr between 1-6
    console.log(player2DiceNr);
    player2Dice.src = "./images/dice" + player2DiceNr + ".png";

    if (player1DiceNr > player2DiceNr) {
        console.log("player1DiceNr greater");
        resultText.textContent = "🚩 Player 1 Win";
    }

    else if (player2DiceNr > player1DiceNr) {
        console.log("player2DiceNr greater");
        resultText.textContent = "🚩 Player 2 Win";
    }

    else {
        console.log("player1DiceNr and player2DiceNr are equal");
        resultText.textContent = "Draw";
    }

}

//let rollBtn = document.getElementById("rollButton");
//rollBtn.onclick = roll



