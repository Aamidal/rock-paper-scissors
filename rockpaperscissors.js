console.log(gameRound())
// Randomly select from rock, paper and scissors

function playerPlay() {
    let playerChoice = prompt('Rock, paper or scissors?');
    return playerChoice.toLowerCase();
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice]
}

function gameRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log(`Comp: ${computerSelection}`)
    console.log(`Player: ${playerSelection}`)

    if (playerSelection === computerSelection) {
        return `${playerSelection} vs ${computerSelection}? You tied!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
            playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lse! ${computerSelection} beats ${playerSelection}!`;
    } 
    else {
        return `You input ${playerSelection},
        which is not rock, paper or scissors`
    } 
}

