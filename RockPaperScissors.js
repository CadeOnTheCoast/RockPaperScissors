let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
  }
function playRound(playerSelection, computerSelection) {
    
        if (playerSelection == computerSelection) {
            "Tie!";
            alert("Tie, play again.");
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
            alert("Paper covers rock, you lose.");
            computerScore ++;
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            alert("Rock destroys scissors, you win!");
            playerScore ++;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
            alert("Scissors cut paper, you lose.");
            computerScore ++;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            alert("Paper covers rock, you win!");
            playerScore ++;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            alert("Scissors cut paper you win!");
            playerScore ++;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
            alert("Rock smashes scissors, you lose.");
            computerScore ++;
        } else {
            return "??";
        }
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose, paper, rick pr experience!)");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection); 
    }
    console.log("The final score was, You: " + Math.abs(playerScore) + " Computer: " + Math.abs(computerScore));
}
console.log(computerSelection + " " + playerSelection)
game();