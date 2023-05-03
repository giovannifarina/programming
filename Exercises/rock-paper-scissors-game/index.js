// recupero oggetti da aggiornare sulla pagina

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

// variabili partita

let playerScore = 0;
let computerScore = 0;
let lastPlayerMove = undefined;
let lastComputerMove = undefined;

// event handlers 

function playerPlayRock() {
  lastPlayerMove = 'rock';
  lastComputerMove = computerPlay();
  playRound(lastPlayerMove,lastComputerMove);
}

function playerPlayScissors() {
  lastPlayerMove = 'scissors';
  lastComputerMove = computerPlay();
  playRound(lastPlayerMove,lastComputerMove);
}

function playerPlayPaper() {
  lastPlayerMove = 'paper';
  lastComputerMove = computerPlay();
  playRound(lastPlayerMove,lastComputerMove);
}

// genera mossa computer
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// gioca partita

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    result = "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    result = "You lose! " + computerSelection + " beats " + playerSelection;
  }
  resultEl.textContent = result;
}

// associazione event handlers

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');

rockButton.addEventListener('click', playerPlayRock);
paperButton.addEventListener('click', playerPlayPaper);
scissorButton.addEventListener('click',playerPlayScissors);
