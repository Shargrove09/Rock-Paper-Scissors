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
  console.log("Comp: ", computerSelection);
  console.log("Player: ", playerSelection);

  if (computerSelection == playerSelection) {
    return "TIE!";
  }
  // Player Wins
  else if (
    (playerSelection == "grass" && computerSelection == "water") ||
    (playerSelection == "fire" && computerSelection == "grass") ||
    (playerSelection == "water" && computerSelection == "fire")
  ) {
    playerScore++;
    setPlayerScore();
    return `${playerSelection} beats ${computerSelection}. Player Wins!`;
  } else if (
    // Computer Wins
    (computerSelection == "grass" && playerSelection == "water") ||
    (computerSelection == "fire" && playerSelection == "grass") ||
    (computerSelection == "water" && playerSelection == "fire")
  ) {
    computerScore++;
    setComputerScore();
    return `${computerSelection} beats ${playerSelection}. Computer Wins!`;
  } else {
    return "Something has gone horribly wrong....";
  }
}

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
  let playerScoreBox = document.querySelector("#player-score");
  playerScoreBox.textContent = playerScore;
  if (playerScore == 5) {
    alert("PLAYER WINS");
  }
}

function setComputerScore() {
  let computerScoreBox = document.querySelector("#rival-score");
  computerScoreBox.textContent = computerScore;
  if (computerScore == 5) {
    alert("Computer WINS");
  }
}

game();
