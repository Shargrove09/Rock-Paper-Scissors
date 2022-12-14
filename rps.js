let buttons = document.querySelectorAll(".button");
let playerScore = 0;
let computerScore = 0;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  selection = randomInteger(1, 3);

  if (selection == 1) return "grass";
  else if (selection == 2) return "fire";
  else return "water";
}

//Deprecated no longer needed
/*
function getPlayerChoice(playerChoice) {
  // let playerChoice = prompt("Type grass, fire or water");
  console.log("Player picked: ", playerChoice);
  return playerChoice;
} */

function playRound(computerSelection, playerSelection) {
  setRivalSelection(computerSelection);
  setPlayerSelection(playerSelection);

  if (computerSelection == playerSelection) {
    setResults(`${playerSelection} ties ${computerSelection}. It's a draw!`);
  }
  // Player Wins
  else if (
    (playerSelection == "grass" && computerSelection == "water") ||
    (playerSelection == "fire" && computerSelection == "grass") ||
    (playerSelection == "water" && computerSelection == "fire")
  ) {
    playerScore++;
    setPlayerScore();
    setResults(`${playerSelection} beats ${computerSelection}. You Win!`);
  } else if (
    // Computer Wins
    (computerSelection == "grass" && playerSelection == "water") ||
    (computerSelection == "fire" && playerSelection == "grass") ||
    (computerSelection == "water" && playerSelection == "fire")
  ) {
    computerScore++;
    setComputerScore();
    setResults(`${computerSelection} beats ${playerSelection}. Rival Wins!`);
  } else {
    return "Something has gone horribly wrong....";
  }
}

//Player and Computer Variables
const playerScoreBox = document.querySelector("#player-score");
const computerScoreBox = document.querySelector("#rival-score");

function game() {
  // Play 5 Rounds
  /*
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), getPlayerChoice()));
  }
  */
  //
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();
    console.log(playRound(getComputerChoice(), playerSelection));
  });
});

function setPlayerScore() {
  playerScoreBox.textContent = playerScore;
  if (playerScore == 5) {
    alert("PLAYER WINS! Resetting the Game");
    playerScore = 0;
    playerScoreBox.textContent = playerScore;
    computerScore = 0;
    computerScoreBox.textContent = computerScore;
  }
}

function setComputerScore() {
  computerScoreBox.textContent = computerScore;
  if (computerScore == 5) {
    alert("Computer WINS. Resetting Game");
    //Resetting the game
    computerScore = 0;
    computerScoreBox.textContent = computerScore;
    playerScore = 0;
    playerScoreBox.textContent = playerScore;
  }
}

function setPlayerSelection(selection) {
  let playerSlot = document.querySelector("#player-pokeball");

  if (selection == "grass") {
    playerSlot.src = "Sprigatito.png";
  } else if (selection == "fire") {
    playerSlot.src = "Fuecoco.png";
  } else if (selection == "water") {
    playerSlot.src = "Quaxly.png";
  }
}

function setRivalSelection(selection) {
  let rivalSlot = document.querySelector("#rival-pokeball");
  if (selection == "grass") {
    rivalSlot.src = "Sprigatito.png";
  } else if (selection == "fire") {
    rivalSlot.src = "Fuecoco.png";
  } else if (selection == "water") {
    rivalSlot.src = "Quaxly.png";
  }
}

function setResults(text) {
  let resultsText = document.querySelector("#results-text");
  resultsText.textContent = text;
}

// Modal Functionality
var modal = document.getElementById("info-modal");
var btn = document.getElementById("info-btn");
console.log("Modal", btn);
var span = document.getElementsByClassName("close")[0];
btn.onclick = () => {
  modal.style.display = "block";
};
span.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Play the game
game();
