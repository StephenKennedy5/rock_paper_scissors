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
    console.log(playRound(button.innerHTML));
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
        update_score("Tie");
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")) {
                    update_score("Player");
    }   else {
        update_score("Computer");
    }

    return
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
        restart_game();
    }
    
}

function restart_game() {
    tieScore = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML = `${playerScore} - ${computerScore} - ${tieScore}`;
}