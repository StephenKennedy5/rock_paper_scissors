// Create function to get computer choice for move
// Create function to get player selection for choice
// Create function for computer selection
// Return string of if you win/lose and player and computer chocie of move

// Add event listener to button that is being choose
// rewrite playRound so call getComputerChoice
// eventlistener calls playRound
// be able to play up til 5 rounds and keep track of score

console.log("To play game type 'game()' in the console");

const buttons = document.querySelectorAll('.choice');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

buttons.forEach(button => button.addEventListener('click', function() {
    console.log(button.innerHTML);
    console.log(game(button.innerHTML));
}))


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

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    console.log(playerSelection,computerSelection)
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")) {
                    return "Player";
    }   else {
        return "Computer";
    }

}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let tieScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let userprompt = prompt(`Want to play a game? Choose Rock, Paper, or Scissors.\nThe Score is ${playerScore}-${computerScore}-${tieScore} \nTo stop playing type Quit or Exit.`);
//         let playerSelection = userprompt.charAt(0).toUpperCase() + userprompt.slice(1).toLocaleLowerCase();
//         let computerSelection = getComputerChoice();

//         if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
//             var outcome = playRound(playerSelection,computerSelection);
//         } else if (playerSelection === "Quit" || playerSelection === "Exit") {
//             break;
//         } else {
//             let userprompt = prompt("You did not choose a proper choice for the game. \nPlease choose Rock, Paper, or Scissors.");
//             let playerSelection = userprompt.charAt(0).toUpperCase() + userprompt.slice(1).toLocaleLowerCase();
//             console.log(playRound(playerSelection,computerSelection));
//         }
//         if (outcome === "Tie") {
//             tieScore++;
//         } else if (outcome === "Player") {
//             playerScore++;
//         } else {
//             computerScore++;
//         }
//     }
//     console.log(`Final Score: Player - ${playerScore}, Computer - ${computerScore}, Ties - ${tieScore}`)
// }

function game(playerSelection) {
    var outcome = playRound(playerSelection);
    
    update_score(outcome);
}

function update_score(outcome) {
    
    if (outcome === "Tie") {
        tieScore++;
    } else if (outcome === "Player") {
        playerScore++;
    } else {
        computerScore++;
    }

    document.getElementById("score").innerHTML = `Your Score ${playerScore} - CPU Score ${computerScore} - ${tieScore}`;
        
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            window.alert("Winner is YOU!");
        } else {
            window.alert("Winner is CPU");
        }
        tieScore = 0;
        playerScore = 0;
        computerScore = 0;
        document.getElementById("score").innerHTML = `${playerScore} - ${computerScore} - ${tieScore}`;
    }

}




// game();