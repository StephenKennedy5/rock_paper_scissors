console.log("hello World")

// Create function to get computer choice for move
// Create function to get player selection for choice
// Create function for computer selection
// Return string of if you win/lose and player and computer chocie of move

function getComputerChoice() {
    let number = Math.random();
    console.log(number)
    if (number < 0.33) {
        var computerChoice = "Rock";
    }   else if (number > 0.33 && number < 0.66) {
        var computerChoice = "Paper";
    } else {
        var computerChoice = "Scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());