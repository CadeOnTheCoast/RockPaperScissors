function computerPlay() {
    pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
  }
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You Lose!"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You Win!"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You Lose!"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win!"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You Win!"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You Lose!"
    } else {
        return "??";
    }
}

function game(){
    for (let index = 0; index < 6; index++) {
        const playerSelection = "rock"
        const computerSelection = computerPlay()
        return playRound(playerSelection, computerSelection)
        
    }
}
  console.log(game())