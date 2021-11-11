const introSection = document.querySelector(".intro")
const playButton = document.querySelector(".play-button");
const mainGame = document.querySelector(".main-game");
const playerScoreElem = document.querySelector(".player-score-number");
const computerScoreElem = document.querySelector(".computer-score-number");
let winnerLine = document.querySelector(".winner");
console.log(winnerLine.innerHTML);
let playerScore = 0;
let computerScore = 0;
let computerChoice;

playerScoreElem.innerHTML = playerScore;

console.log(document.querySelector(".player-score-number").innerHTML);

playButton.addEventListener("click", (e) => {
    e.preventDefault();
    introSection.style.maxHeight = "0px";
    introSection.style.overflow = "hidden";
    mainGame.style.maxHeight = mainGame.scrollHeight + "px";
    console.log(Math.floor(Math.random() * 3));
});

const computerOptions = ['rock', 'paper', 'scissors'];
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissors = document.querySelector(".scissors");
let randomNumber;
console.log(computerOptions[Math.floor(Math.random() * 3)]);

playerRock.addEventListener("click", (e) => {
    e.preventDefault();
    playerHand.style.animation = "moveMe 2s linear";
    computerHand.style.animation = "moveMe 2s linear";
    compareFunction('rock', computerOptions[Math.floor(Math.random() * 3)]);
})

playerPaper.addEventListener("click", (e) => {
    e.preventDefault();
    playerHand.style.animation = "moveMe 2s linear";
    computerHand.style.animation = "moveMe 2s linear";
    compareFunction('paper', computerOptions[Math.floor(Math.random() * 3)]);
})

playerScissors.addEventListener("click", (e) => {
    e.preventDefault();
    playerHand.style.animation = "moveMe 2s linear";
    computerHand.style.animation = "moveMe 2s linear";
    compareFunction('scissors', computerOptions[Math.floor(Math.random() * 3)]);
})

function compareFunction(pC, cC) {
    if (pC == 'rock' && cC == "paper") {
        setTimeout(() => {
            playerHand.src = "./assets/rock-rot.png";
            computerHand.src = "./assets/paper.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            computerScore++;
            computerScoreElem.innerHTML = computerScore;
            winnerLine.innerHTML = "Computer Won";
            checkGameStatus();
        }, 2000);
    }
    if (pC == 'rock' && cC == "rock") {
        setTimeout(() => {
            playerHand.src = "./assets/rock-rot.png";
            computerHand.src = "./assets/rock.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            winnerLine.innerHTML = "It's a Tie";
            checkGameStatus();
        }, 2000);
    }
    if (pC == 'rock' && cC == "scissors") {
        setTimeout(() => {
            playerHand.src = "./assets/rock-rot.png";
            computerHand.src = "./assets/scissors.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            playerScore++;
            playerScoreElem.innerHTML = playerScore;
            winnerLine.innerHTML = "You Won";
            checkGameStatus();
        }, 2000);
    }

    if (pC == 'paper' && cC == "scissors") {
        setTimeout(() => {
            playerHand.src = "./assets/paper-rot.png";
            computerHand.src = "./assets/scissors.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            computerScore++;
            computerScoreElem.innerHTML = computerScore;
            winnerLine.innerHTML = "Computer Won";
            checkGameStatus();
        }, 2000);
    }
    if (pC == 'paper' && cC == "paper") {
        setTimeout(() => {
            playerHand.src = "./assets/paper-rot.png";
            computerHand.src = "./assets/paper.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            winnerLine.innerHTML = "It's a Tie";
            checkGameStatus();
        }, 2000);
    }
    if (pC == 'paper' && cC == "rock") {
        setTimeout(() => {
            playerHand.src = "./assets/paper-rot.png";
            computerHand.src = "./assets/rock.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            playerScore++;
            playerScoreElem.innerHTML = playerScore;
            winnerLine.innerHTML = "You Won";
            checkGameStatus();
        }, 2000);
    }

    if (pC == 'scissors' && cC == "rock") {
        setTimeout(() => {
            playerHand.src = "./assets/scissors-rot.png";
            computerHand.src = "./assets/rock.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            computerScore++;
            computerScoreElem.innerHTML = computerScore;
            winnerLine.innerHTML = "Computer Won";
            checkGameStatus();
        }, 2000);
    }
    if (pC == 'scissors' && cC == "scissors") {
        setTimeout(() => {
            playerHand.src = "./assets/scissors-rot.png";
            computerHand.src = "./assets/scissors.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            winnerLine.innerHTML = "It's a Tie";
            checkGameStatus();
        }, 2000);
    }
    if (pC == 'scissors' && cC == "paper") {
        setTimeout(() => {
            playerHand.src = "./assets/scissors-rot.png";
            computerHand.src = "./assets/paper.png";
            playerHand.style.animation = "";
            computerHand.style.animation = "";
            playerScore++;
            playerScoreElem.innerHTML = playerScore;
            winnerLine.innerHTML = "You Won";
            checkGameStatus();
        }, 2000);
    }
}

const gameStatusCheck = document.querySelector(".game-end");
const gameEndStatus = document.querySelector(".game-end-sentance");
const playAgainButton = document.querySelector(".play-again-button");

function checkGameStatus() {
    if (playerScore > 4) {
        gameEndStatus.innerHTML = "You Won";
        mainGame.style.maxHeight = "0px";
        mainGame.style.overflow = "hidden";
        gameStatusCheck.style.maxHeight = mainGame.scrollHeight + "px";
    }
    if (computerScore > 4) {
        gameEndStatus.innerHTML = "Computer Won";
        mainGame.style.maxHeight = "0px";
        mainGame.style.overflow = "hidden";
        gameStatusCheck.style.maxHeight = mainGame.scrollHeight + "px";
    }
}

playAgainButton.addEventListener("click", (e) => {
    e.preventDefault();
    introSection.style.maxHeight = mainGame.scrollHeight + "px";
    gameStatusCheck.style.maxHeight = "0px";
    gameStatusCheck.style.overflow = "hidden";
    playerScore = 0;
    playerScoreElem.innerHTML = 0;
    computerScore = 0;
    computerScoreElem.innerHTML = 0;
})