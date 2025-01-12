
// Declaring DOM Elements

const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rock");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id", "scissors");
scissorsButton.textContent = "Scissors"

const selectionResult = document.createElement("div");
selectionResult.classList.toggle("score");
const scoreResult = document.createElement("div");
scoreResult.classList.toggle("score");
const scoreCount = document.createElement("p");
scoreCount.classList.toggle("score");


const container = document.createElement("div");
container.classList.toggle("container");
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(selectionResult);
container.appendChild(scoreResult);
container.appendChild(scoreCount);

document.body.appendChild(container);

// Event Listener Function

let selection;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "rock") {
            selection = "Rock";
        } else if (button.id === "paper") {
            selection = "Paper";
        } else if (button.id === "scissors") {
            selection = "Scissors";
        } 
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    return selection;
}

let choice; 

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    choice = (randomNumber === 0) ? "Rock" :
        (randomNumber === 1) ? "Paper" :
        "Scissors";
    return choice;
}

// functions to play game 

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(humanChoice, computerChoice) {
    ++roundsPlayed;
    selectionResult.textContent = `You Chose ${humanChoice}, Computer chose ${computerChoice}`;

    if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        ++humanScore;
        console.log("You Win");
        scoreResult.textContent = `Congratulations, you win.`
    } else if (humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"
    ) {
        ++computerScore;
        console.log("You Lose");
        scoreResult.textContent = `You Lose. Try again.`;
    } else {
        scoreResult.textContent = "Draw";
        console.log("Draw");
    }
  }


function resetGame() {
    alert(`Gamer Over! Final Score: You: ${humanScore}, Computer: ${computerScore}`);
    scoreResult.textContent = `Game Over! Final Score:`;
    selectionResult.textContent = '';
    console.log("Game Reset");
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    scoreCount.textContent = `Score: You: ${humanScore}, Computer: ${computerScore}`;
    
    if (roundsPlayed === 5) {
        resetGame();
    }
}

//starting the game with click

buttons.forEach(button => {
    button.addEventListener("click", playGame);
})