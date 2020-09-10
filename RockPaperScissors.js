let playerScore = 0;
let computerScore = 0;
let totalScore = 0;
let playerSelection;
let computerSelection;
let playerName = "Player";

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    playerScore = 0;
    totalScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = playerName + ": " + playerScore;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
playerName = prompt("What's your name?")
if (playerName == ""){
    playerName = "Blank String";
}
document.getElementById("playerScore").innerHTML = playerName + ": 0";

var rockbtn = document.getElementById("rock");
var paperbtn = document.getElementById("paper");
var scissorbtn = document.getElementById("scissors");

rockbtn.onclick = function (){
    playerSelection = "rock";
    game()
} 
paperbtn.onclick = function () {
    playerSelection = "paper";
    game()
} 
scissorbtn.onclick = function () {
    playerSelection = "scissors";
    game()
} 

if (totalScore >= 5) {
    modal.addClass(visible);
}

function game(){
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection); 
        document.getElementById("playerScore").innerHTML = playerName + ": " + playerScore;
        document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
        if (playerScore >= 5){
            var modalHeader = document.getElementById("modal-header");
            modalHeader.innerHTML = playerName + " Wins!";
            modal.style.display = "block";
        }else if (computerScore >= 5){
            var modalHeader = document.getElementById("modal-header");
            modalHeader.innerHTML = "Computer Wins!";
            modal.style.display = "block";
        }
}
    //if (playerScore > computerScore){
    //    alert ("You Win! The final score was, You: " + playerScore + "; Computer: " + computerScore);
   // }else{
    //    alert ("You Lose! The final score was, You: " + playerScore + "; Computer: " + computerScore);
   // }


