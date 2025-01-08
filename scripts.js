function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rock");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id", "scissors");
scissorsButton.textContent = "Scissors"

const container = document.createElement("div");
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

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


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        let hum = humanChoice; // Script was incorrectly displaying winner before this was added.
        let comp = computerChoice; // Temporary values to store the random value so that winner can be determined correctly.
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

    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Final Score: ${humanScore}, Compter: ${computerScore}`);
    let score1 = humanScore;
    let score2 = computerScore;

    if (score1 > score2) {
        console.log("Congratulations, you won!");
    } else if (score2 > score1) {
        console.log("Better luck next time!");
    } else {
        console.log("Draw")
    }
}

buttons.forEach(button => {
    button.addEventListener("click", playGame);
});
