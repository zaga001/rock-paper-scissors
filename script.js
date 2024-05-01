function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper, or scissors.').toLowerCase();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        return 'error';
    } else {
        return humanChoice;
    }
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
