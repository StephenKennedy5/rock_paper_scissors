console.log("To play game type 'game()' in the console");

// Create function to get computer choice for move
// Create function to get player selection for choice
// Create function for computer selection
// Return string of if you win/lose and player and computer chocie of move

function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) {
        var computerChoice = "Rock";
    }   else if (number > 0.33 && number < 0.66) {
        var computerChoice = "Paper";
    } else {
        var computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection,computerSelection);
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            console.log(`It's a tie. ${playerSelection} ties ${computerSelection}.`);
        } else if (computerSelection === "Scissors") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        } else {
            console.log(`You Lose. ${computerSelection} beats ${playerSelection}.`);
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Scissors") {
            console.log(`It's a tie. ${playerSelection} ties ${computerSelection}.`);
        } else if (computerSelection === "Paper") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        } else {
            console.log(`You Lose. ${computerSelection} beats ${playerSelection}.`);
        }
    } else {
        if (computerSelection === "Paper") {
            console.log(`It's a tie. ${playerSelection} ties ${computerSelection}.`);
        } else if (computerSelection === "Rock") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        } else {
            console.log(`You Lose. ${computerSelection} beats ${playerSelection}.`);
        }
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        let userprompt = prompt("Want to play a game? Choose Rock, Paper, or Scissors. \nTo stop playing type Quit or Exit.");
        let playerSelection = userprompt.charAt(0).toUpperCase() + userprompt.slice(1).toLocaleLowerCase();
        let computerSelection = getComputerChoice();

        if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
            console.log(playRound(playerSelection,computerSelection));
        } else if (playerSelection === "Quit" || playerSelection === "Exit") {
            break;
        } else {

        }

    }
}

game();