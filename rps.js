function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  num = randomInteger(1, 3);

  if (num == 1) return "rock";
  else if (num == 2) return "paper";
  else return "scissors";
}

function getPlayerChoice() {
  let playerChoice = prompt("Type rock, paper or scissors");

  return playerChoice;
}

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    return "TIE!";
  }
  // Player Wins
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return `${playerSelection} beats ${computerSelection}. Player Wins!`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    return `${computerSelection} beats ${playerSelection}. Computer Wins!`;
  } else {
    console.log;
    return "Something has gone horribly wrong....";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), getPlayerChoice()));
  }
}

game();
