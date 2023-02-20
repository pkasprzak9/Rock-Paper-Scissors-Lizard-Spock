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

function playRound(computerSelection, userSelection){
    
    if (computerSelection === "Rock"){
        if (userSelection === "rock"){
            whoWon = "Its a tie!";
        }
        else if (userSelection === "paper"){
            whoWon = "You win! Paper beats rock!";
        }
        else if (userSelection === "scissors") {
            whoWon = "You loose! Rock beats scissors";
        }
        else{
            return 0;
        }
    }
    else if (computerSelection === "Paper"){
        if (userSelection === "paper"){
            whoWon = "Its a tie!";
        }
        else if (userSelection === "scissors"){
            whoWon = "You win! Scissors beats paper!";
        }
        else if (userSelection === "rock"){
            whoWon = "You loose! Paper beats rock!";
        }
        else{
            return 0;
        }
    }
    else {
        if (userSelection === "scissors"){
            whoWon = "Its a tie!";
        }
        else if (userSelection === "paper"){
            whoWon = "You loose! Scissors beats paper!";
        }
        else if (userSelection === "rock"){
            whoWon = "You win! Rock beats Scissors!";
        }
        else{
            return 0;
        }
    }
    
    return whoWon;
}

// console.log(computerSelection);
// console.log(userSelection);
// console.log(playRound(computerSelection, userSelection.toLowerCase()));

function game() {
    computerScore = 0;
    userScore = 0;
    for (i = 0; i < 5; i++)
    {
        const computerSelection = getComputerChoice();
        const userSelection = prompt("Choose your weapon (rock, paper, scissors)");
        console.log(computerSelection, userSelection);
        round = playRound(computerSelection, userSelection.toLowerCase());
        console.log(round);

        if (round.startsWith("You win")){
            userScore += 1;
        }
        else if (round.startsWith("You loose")) {
            computerScore += 1;
        }

        console.log(computerScore, userScore);
    }

    if (computerScore > userScore){
        winner = "computer";
    }
    else if (computerScore < userScore){
        winner = "user";
    }
    else {
        winner = "Nobody"
    }

    console.log(winner + " is a winner!");
}

game();
