function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    let play = (choice === 0) ? "Rock" :
        (choice === 1) ? "Paper" :
        "Scissors";
    return play;
}

let human;

function getHumanChoice() {
    let human = prompt("Rock, Paper or Scissors?", "");
    return human.charAt(0).toUpperCase() + human.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let hum = humanChoice;
    let comp = computerChoice;
    console.log(`You Chose ${hum}`);
    console.log(`Computer Chose ${comp}`);

    if (hum === "Rock" && comp === "Paper") {
        console.log("You Lose.");
        ++computerScore;
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (hum === "Rock" && comp === "Scissors") {
        console.log("You Win!");
        ++humanScore;
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (hum === "Paper" && comp === "Scissors") {
        console.log("You Lose.");
        ++computerScore;
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (hum === "Paper" && comp === "Rock") {
        console.log("You Win");
        ++humanScore;
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (hum === "Scissors" && comp === "Rock") {
        console.log("You Lose.");
        ++computerScore;
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (hum === "Scissors" && comp === "Paper") {
        console.log("You Win");
        ++humanScore;
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log("Draw")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


