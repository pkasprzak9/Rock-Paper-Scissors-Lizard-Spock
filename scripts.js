/*  ROCK PAPER SCISSORS GAME    
    STEPS:
    1.  Get computer choice
    2.  Get user's choice
    3.  See who won - play round - if computer get scissors then check what user gets in a if else loop
    4.  Do you wanna play again
*/

function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);

    if (rand === 0){
        choice = "Rock";
    }
    else if(rand === 1){
        choice = ("Paper");
    }
    else {
        choice = ("Scissors");
    }

    return choice;
}

console.log(getComputerChoice());


function playRound(computerSelection, userSelection){
    
    if (computerSelection === "Rock"){
        if (userSelection === "rock"){
            console.log("Its a tie!")
        }
        else if (userSelection === "paper"){
            console.log("You win! Paper beats rock!")
        }
        else {
            console.log("You loose! Rock beats scissors")
        }
    }
    else if (computerSelection === "Paper"){
        if (userSelection === "paper"){
            console.log("Its a tie!")
        }
        else if (userSelection === "scissors"){
            console.log("You win! Scissors beats paper!")
        }
        else {
            console.log("You loose! Paper beats rock!")
        }
    }
    else {
        if (userSelection === "scissors"){
            console.log("Its a tie!")
        }
        else if (userSelection === "paper"){
            console.log("You loose! Scissors beats paper!")
        }
        else {
            console.log("You win! Rock beats Scissors!")
        }
    }
}

playRound(getComputerChoice(), "paper");


