function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Declaring variables to be html elements
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

// Event Listener function goes here
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


function getComputerChoice() {
    let choice = getRandomInt(3);
    let play = (choice === 0) ? "Rock" :
        (choice === 1) ? "Paper" :
        "Scissors";
    return play;
}


function getHumanChoice() {
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
}


// Logic to play game
let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0;

function playGame() {
    
    function resetGame() {
        alert(`Game Over! Final Score: You: ${humanScore}, Computer: ${computerScore}` );
        humanScore = 0;
        computerScore = 0;
        roundPlayed = 0;
        scoreResult.textContent = "Game Over!, Final Score:";
        selectionResult.textContent = "";
        console.log("Game reset");
        
    }

    function playRound(humanChoice, computerChoice) {
        ++roundPlayed;
        let hum = humanChoice; // Script was incorrectly displaying winner before this was added.
        let comp = computerChoice; // Temporary values to store the random value so that winner can be determined correctly.
        selectionResult.textContent = `You Chose ${hum}, Computer chose ${comp}`;
        console.log(`You Chose ${hum}`);
        console.log(`Computer Chose ${comp}`);

        if (hum === "Rock" && comp === "Scissors" ||
            hum === "Paper" && comp === "Rock" ||
            hum === "Scissors" && comp === "Paper"
        ) {
            console.log("You Win!");
            ++humanScore;
            console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
        } else if (hum === "Rock" && comp === "Paper" ||
            hum === "Paper" && comp === "Scissors" ||
            hum === "Scissors" && comp === "Rock"
         ) {
            console.log("You Lose.");
            ++computerScore;
            console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
         } else {
            console.log("Draw")
         }
         
    }

    console.log(`Final Score: ${humanScore}, Compter: ${computerScore}`);
    scoreCount.textContent = `Score: You: ${humanScore}, Computer: ${computerScore}`;
    let score1 = humanScore;
    let score2 = computerScore;

    if (score1 > score2) {
        scoreResult.textContent = "Congratulations, you won!";
        console.log("Congratulations, you won!");
    } else if (score2 > score1) {
        scoreResult.textContent = "Better luck next time!";
        console.log("Better luck next time!");
    } else {
        scoreResult.textContent = "Draw";
        console.log("Draw")
    }

    //statement to reset after 5 rounds
    if (roundPlayed === 5) {
        resetGame();
    }
    
    playRound(getHumanChoice(), getComputerChoice());
}

buttons.forEach(button => {
    button.addEventListener("click", playGame);
});
