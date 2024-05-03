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
        console.log('Invalid choice. Try again.');
        return getHumanChoice();
    } else {
        return humanChoice;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection === computerSelection) {
            console.log("It's a tie!");
        } else if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
            (humanSelection === 'scissors' && computerSelection === 'papers') ||
            (humanSelection === 'papers' && computerSelection === 'rock')) {
            console.log(`You win! ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)} beats ${computerSelection}.`);
            humanScore += 1;
        } else {
            console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${humanSelection}.`);
            computerScore += 1;
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`Score - Human: ${humanScore} Computer: ${computerScore}`)
}

playGame();
