let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage;
    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
        resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
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
