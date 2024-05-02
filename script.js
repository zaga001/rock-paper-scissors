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
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'papers') || (humanChoice === 'papers' && computerChoice === 'rock')) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore += 1;
    } else if (humanChoice === 'error') {
        console.log('You have entered an invalid choice. Try again.');
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore += 1;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
