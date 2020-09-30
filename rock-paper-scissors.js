//Get references to each button, and add EventListeners
const buttonRock = document.querySelector('#button-rock');
const buttonPaper = document.querySelector('#button-paper');
const buttonScissors = document.querySelector('#button-scissors');

const choices = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

buttonRock.addEventListener('click', function() {
    PlayGame(choices.ROCK);
});

buttonPaper.addEventListener('click', function() {
    PlayGame(choices.PAPER);
});

buttonScissors.addEventListener('click', function() {
    PlayGame(choices.SCISSORS);
});

//Get references to choice img and text elements
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('ai-choice');
const playerText = document.getElementById('player-text');
const computerText = document.getElementById('ai-text');

//Get references to choice containers
const playerDiv = document.getElementById('player-display');
const computerDiv = document.getElementById('ai-display');

function computerPlay() {
    let computerChoice;
    let randomInt = Math.floor(Math.random() * 3) + 1;

    if (randomInt == 1) {
        computerChoice = choices.ROCK;
        computerDisplay.src = "images/rock.png";
    } else if (randomInt == 2) {
        computerChoice = choices.PAPER;
        computerDisplay.src = "images/paper.png";
    } else if (randomInt == 3) {
        computerChoice = choices.SCISSORS;
        computerDisplay.src = "images/scissors.png";
    }

    computerText.textContent = computerChoice.toUpperCase();
    return computerChoice;
}

function PlayGame (playerChoice) {
    computerChoice = computerPlay();

    let result;

    if (playerChoice == "rock") {
        //LOGIC
        if (computerChoice == "rock") {
            result = "DRAW";
        } else if (computerChoice == "paper") {
            result = "LOSE";
        } else if (computerChoice == "scissors") {
            result = "WIN";
        }

        //DISPLAY
        playerDisplay.src = "images/rock.png";
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            result = "WIN";
        } else if (computerChoice == "paper") {
            result = "DRAW";
        } else if (computerChoice == "scissors") {
            result = "LOSE";
        }

        playerDisplay.src = "images/paper.png";
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            result = "LOSE";
        } else if (computerChoice == "paper") {
            result = "WIN";
        } else if (computerChoice == "scissors") {
            result = "DRAW";
        }

        playerDisplay.src = "images/scissors.png";
    }

    playerText.textContent = playerChoice.toUpperCase();

    document.getElementById('display').removeAttribute("class");

    if (result == "WIN") {
        playerDiv.style.backgroundColor = 'var(--choice-win-color)';
        computerDiv.style.backgroundColor = 'var(--choice-lose-color)';
    } else if (result == "DRAW") {
        playerDiv.style.backgroundColor = 'var(--choice-draw-color)';
        computerDiv.style.backgroundColor = 'var(--choice-draw-color)';
    } else {
        playerDiv.style.backgroundColor = 'var(--choice-lose-color)';
        computerDiv.style.backgroundColor = 'var(--choice-win-color)';
    }
    
    return result;
}

/*
function game () {
    for (let i = 0; i < 5; i++) {
        PlayGame();
    }
}

game();
*/