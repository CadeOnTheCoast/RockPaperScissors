let playerScore = 0;
let computerScore = 0;
let totalScore = 0;
let playerSelection;
let computerSelection;
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
            computerScore += 1;
            totalScore += 1;
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            alert("Rock destroys scissors, you win!");
            playerScore += 1;
            totalScore += 1;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
            alert("Scissors cut paper, you lose.");
            computerScore += 1;
            totalScore += 1;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            alert("Paper covers rock, you win!");
            playerScore += 1;
            totalScore += 1;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            alert("Scissors cut paper you win!");
            playerScore += 1;
            totalScore += 1;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
            alert("Rock smashes scissors, you lose.");
            computerScore += 1;
            totalScore += 1;
        } else {
            return "??";
        }
}

function game(){
    while (totalScore <= 5) {
        playerSelection = prompt("Please choose paper, rock, or scissors!)");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection); 
        alert("The score is" + playerScore + "computer" + computerScore+ "total" + totalScore);
    }
    alert ("The final score was, You: " + playerScore + " Computer: " + computerScore);
}
game();
