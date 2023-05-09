// (2)
let n_games = prompt("How many games would you like to play?");
// (3)
n_games = parseInt(n_games);
if (isNaN(n_games)) {
    console.log(0);
}
else {
    // (4)
    if (n_games <= 0) {
        console.log(0);
    }
    else {
        console.log(n_games);
    }
}

// (5)

let p1lButton = document.getElementById('p1l');
let p1wButton = document.getElementById('p1w');
let p2lButton = document.getElementById('p2l');
let p2wButton = document.getElementById('p2w');
let tieButton = document.getElementById('tie');

let p1scoreElement = document.getElementById('p1score');
let p2scoreElement = document.getElementById('p2score');

let p1score = 0;
let p2score = 0;

// (6)
let playedGames = 0;
function endGame() {
    elementToAdd = document.createElement('p');
    if (p1score > p2score) {
        elementToAdd.textContent = "Player 1 won the game with score " + p1score.toString();
    }
    else if (p2score > p1score) {
        elementToAdd.textContent = "Player 2 won the game with score " + p2score.toString();
    }
    else {
        elementToAdd.textContent = "No player won, it’s a tie";
    }
    document.getElementById('finalResult').appendChild(elementToAdd);
}

function updateInterface() {
    playedGames++;
    p1scoreElement.textContent = p1score;
    p2scoreElement.textContent = p2score;
    if (playedGames === n_games) {
        endGame();
    }
    // (7)
    if (p1score === -1 || p2score === -1) {
        endGame();
    }
}

function p1w() {
    p1score++;
    updateInterface();
}

function p1l() {
    p1score--;
    updateInterface();
}

function p2w() {
    p2score++;
    updateInterface();
}

function p2l() {
   p2score--;
   updateInterface();
}

function tie() {
    updateInterface();
}

p1wButton.addEventListener('click', p1w);
p1lButton.addEventListener('click', p1l);
p2wButton.addEventListener('click', p2w);
p2lButton.addEventListener('click', p2l);
tieButton.addEventListener('click', tie);
