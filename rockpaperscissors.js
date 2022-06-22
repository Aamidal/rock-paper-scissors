//const playerSelection = 'rock';
const choices = ['rock', 'paper', 'scissors'];

console.log(game());

// Get player choice
function playerPlay() {
    let playerChoice = ''
    while (playerChoice === '') {
        playerInput = prompt('Rock, paper or scissors?').toLowerCase();
        if (choices.includes(playerInput)) {
            playerChoice = playerInput;
        }
        else {
            console.log('Invalid input, try again.');
        }
    }
    return playerChoice;
}

// Randomly select from rock, paper and scissors
function computerPlay() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice]
}

function gameRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (playerSelection === computerSelection) {
        console.log(`Round result: Tie! 
        (${playerSelection} vs ${computerSelection})`);
        return 'tie';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`Round Result: Win! 
        (${playerSelection} beats ${computerSelection}!)`);
        return 'win';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
            playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(`Round Result: Lose! 
        (${computerSelection} beats ${playerSelection}!)`);
        return 'lose';
    } 
    else {
        return `You input ${playerSelection},
        which is not rock, paper or scissors`
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = '';


    for (i = 0; i < 5; i++) {
        console.log(`Round: ${i + 1} Current Score: ${playerScore}-${computerScore}`);
        let result = gameRound();
        if (result === 'win') {
            playerScore = playerScore + 1;
        }
        else if (result === 'lose'){
            computerScore = computerScore +1;
        }
    }
    if (playerScore === computerScore) {
        winner = 'You tied!';
    }
    else if (playerScore > computerScore) {
        winner = 'You won!'
    }
    else {
        winner = 'You lost!'
    }
    let score = `Final Score: Player: ${playerScore} Computer: ${computerScore}.`;
    return `${winner} ${score}`
}
