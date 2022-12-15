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

function playRound(computerSelection, playerSelection) {
  setRivalSelection(computerSelection);
  setPlayerSelection(playerSelection);

  // Tie
  if (computerSelection == playerSelection) {
    setResults(`${playerSelection} ties ${computerSelection}. It's a draw!`);
    getComputerQuote("tie");
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
    getComputerQuote("win");
  } else if (
    // Computer Wins
    (computerSelection == "grass" && playerSelection == "water") ||
    (computerSelection == "fire" && playerSelection == "grass") ||
    (computerSelection == "water" && playerSelection == "fire")
  ) {
    computerScore++;
    setComputerScore();
    setResults(`${computerSelection} beats ${playerSelection}. Rival Wins!`);
    getComputerQuote("lose");
  } else {
    return "Something has gone horribly wrong....";
  }
}

//Generating rival quote

const rivalTextBox = document.querySelector("#rival-text");

function getComputerQuote(playerOutcome) {
  randInt = randomInteger(1, 3);
  console.log("RandInt", randInt);

  if (playerOutcome == "tie") {
    switch (randInt) {
      case 1:
        rivalTextBox.textContent = "Great minds think alike!";
        console.log("Great minds think alike!");
        break;
      case 2:
        rivalTextBox.textContent = "A tie! Wow!";
        console.log("A tie! Wow!");
        break;
      case 3:
        rivalTextBox.textContent =
          "Wow you really are fit to be my rival! One more!";
        console.log("You really are fit to be my rival! One more!");
        break;
    }
  }

  if (playerOutcome == "win") {
    switch (randInt) {
      case 1:
        rivalTextBox.textContent = "Wow! Nice move!";
        console.log("Wow! Nice move!");
        break;
      case 2:
        rivalTextBox.textContent = "You're amazing!";
        console.log("You're amazing!");
        break;
      case 3:
        rivalTextBox.textContent = "Way to know your type matchups!";
        console.log("Way to know your type matchups!");
        break;
    }
  }

  if (playerOutcome == "lose") {
    switch (randInt) {
      case 1:
        rivalTextBox.textContent = "Ha I win! Better Luck Next Time";
        console.log("Ha I win! Better Luck Next Time");
        break;
      case 2:
        rivalTextBox.textContent = "Yes! Gotcha!";
        console.log("Yes! Gotcha!");
        break;
      case 3:
        rivalTextBox.textContent = "Nice! This is why I love battling!";
        console.log("Nice! This is why I love battling!");
        break;
    }
  }
}

//Player and Computer Variables
const playerScoreBox = document.querySelector("#player-score");
const computerScoreBox = document.querySelector("#rival-score");
const playerSlot = document.querySelector("#player-pokeball");
const rivalSlot = document.querySelector("#rival-pokeball");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    //Playing Round when button is clicked
    playRound(getComputerChoice(), playerSelection);
  });
});

// Setting Scores
function setPlayerScore() {
  playerScoreBox.textContent = playerScore;
  if (playerScore == 5) {
    alert("PLAYER WINS! Resetting the Game");
    resetGame();
  }
}

function setComputerScore() {
  computerScoreBox.textContent = computerScore;
  if (computerScore == 5) {
    alert("Computer WINS. Resetting Game");
    resetGame();
  }
}

// Changin Selection Images
function setPlayerSelection(selection) {
  if (selection == "grass") {
    playerSlot.src = "Sprigatito.png";
  } else if (selection == "fire") {
    playerSlot.src = "Fuecoco.png";
  } else if (selection == "water") {
    playerSlot.src = "Quaxly.png";
  }
}

function setRivalSelection(selection) {
  if (selection == "grass") {
    rivalSlot.src = "Sprigatito.png";
  } else if (selection == "fire") {
    rivalSlot.src = "Fuecoco.png";
  } else if (selection == "water") {
    rivalSlot.src = "Quaxly.png";
  }
}

const resultsText = document.querySelector("#results-text");

function setResults(text) {
  resultsText.textContent = text;
  resultsText.classList.remove("results-text-anim");
  resultsText.offsetWidth;
  resultsText.classList.add("results-text-anim");
}

function resetGame() {
  //Resetting the game
  computerScore = 0;
  computerScoreBox.textContent = computerScore;
  playerScore = 0;
  playerScoreBox.textContent = playerScore;

  //Reset Player/Rival Slots
  playerSlot.src = "pokeball.png";
  rivalSlot.src = "pokeball.png";
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
