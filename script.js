function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const roundResult = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let resultMessage;
    if (playerSelection === computerSelection) {
        resultMessage = "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        resultMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
        computerScore++;
    }

    roundResult.textContent = resultMessage;
    score.textContent = `Score - Human: ${humanScore} Computer: ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        disableButtons();
        let winnerMessage = humanScore > computerScore ? 'Human wins!' : 'Computer wins!';
        winner.textContent = winnerMessage;
    }


}


function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));
