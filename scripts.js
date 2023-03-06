

function getComputerChoice() {
    rand = Math.floor(Math.random() * 5);

    if (rand === 0){
        choice = "Rock";
    }
    else if(rand === 1){
        choice = ("Paper");
    }
    else if (rand === 2){
        choice = ("Scissors");
    }
    else if (rand === 3){
        choice = ("Lizard");
    }
    else if (rand === 4){
        choice = ("Spock");
    }

    return choice;
}

function playRound(computerSelection, userSelection){

    if (computerSelection === "Rock"){
        if (userSelection === "rock"){
            whoWon = "It's a tie!";
        }
        else if (userSelection === "paper"){
            whoWon = "You won! Paper covers rock!";
        }
        else if (userSelection === "scissors"){
            whoWon = "You loose! Rock crushes scissors!";
        }
        else if (userSelection === "lizard"){
            whoWon = "You loose! Rock crushes lizard!";
        }
        else if (userSelection === "spock"){
            whoWon = "You win! Spock vaporizes rock!";
        }
    }
    else if (computerSelection === "Paper"){
        if (userSelection === "rock"){
            whoWon = "You loose! Paper covers rock!";
        }
        else if (userSelection === "paper"){
            whoWon = "It's a tie!";
        }
        else if (userSelection === "scissors"){
            whoWon = "You win! Scissors cuts paper!";
        }
        else if (userSelection === "lizard"){
            whoWon = "You win! Lizard eats paper!";
        }
        else if (userSelection === "spock"){
            whoWon = "You loose! Paper disproves spock!";
        }
    }
    else if (computerSelection === "Scissors"){
        if (userSelection === "rock"){
            whoWon = "You win! Rock crushes scissors!";
        }
        else if (userSelection === "paper"){
            whoWon = "You loose! Scissors cuts paper!";
        }
        else if (userSelection === "scissors"){
            whoWon = "It's a tie!";
        }
        else if (userSelection === "lizard"){
            whoWon = "You loose! Scissors decapitates lizard!";
        }
        else if (userSelection === "spock"){
            whoWon = "You win! Spock smashes scissors!";
        }
    }
    else if (computerSelection === "Lizard"){
        if (userSelection === "rock"){
            whoWon = "You win! Rock crushes lizard!";
        }
        else if (userSelection === "paper"){
            whoWon = "You loose! Lizard eats paper!";
        }
        else if (userSelection === "scissors"){
            whoWon = "You win! Scissors decapitates lizard!";
        }
        else if (userSelection === "lizard"){
            whoWon = "It's a tie!";
        }
        else if (userSelection === "spock"){
            whoWon = "You loose! Lizard poisons spock!";
        }
    }
    else if (computerSelection === "Spock"){
        if (userSelection === "rock"){
            whoWon = "You loose! Spock vaporizes rock!";
        }
        else if (userSelection === "paper"){
            whoWon = "You win! Paper disproves spock!";
        }
        else if (userSelection === "scissors"){
            whoWon = "You loose! Spock smashes scissors!";
        }
        else if (userSelection === "lizard"){
            whoWon = "You win! Lizard poisons spock!";
        }
        else if (userSelection === "spock"){
            whoWon = "It's a tie!";
        }
    }
    return whoWon;
    }

    let userScore = 0;
    let computerScore = 0;
    document.getElementById('single-score-user').innerHTML = `Your score: ${userScore}`;
    document.getElementById('single-score-computer').innerHTML = `Machine's score: ${computerScore}`;
    document.querySelectorAll('.weapon-button').forEach(item => {
        item.addEventListener('click', function(){
            const computerSelection = getComputerChoice();
            const userSelection = item.id;
            document.getElementById('weaponUser').innerHTML = `You choose: ${item.id}`;
            document.getElementById('weaponComputer').innerHTML = `Machine choose: ${computerSelection}`;
            let winner = playRound(computerSelection, userSelection);
            if (winner.startsWith("You win")){
                document.getElementById('winner').innerHTML = 'You won!'
                userScore++;
                document.getElementById('single-score-user').innerHTML = `Your score: ${userScore}`;
            }
            else if (winner.startsWith("You loose")){
                document.getElementById('winner').innerHTML = 'You loose!'
                computerScore++;
                document.getElementById('single-score-computer').innerHTML = `Machine's score: ${computerScore}`;
            }
            else {
                document.getElementById('winner').innerHTML = 'It\s a tie!'
            }
            // console.log(computerSelection);
            // console.log(userSelection);
            // console.log(playRound(computerSelection, userSelection));
        })
    });

