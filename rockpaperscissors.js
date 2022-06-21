const playerSelection = 'rock';
console.log(game());

// function playerPlay() {
//     let playerChoice = prompt('Rock, paper or scissors?');
//     return playerChoice.toLowerCase();
// }
// Randomly select from rock, paper and scissors

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice]
}

function gameRound() {
    let computerSelection = computerPlay();
    //let playerSelection = playerPlay();
    console.log(`Comp: ${computerSelection}`)
    console.log(`Player: ${playerSelection}`)

    if (playerSelection === computerSelection) {
        return `You tied! ${playerSelection} vs ${computerSelection}`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
            playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
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
        let round = gameRound();
        result = round.split(' ')[1]
        console.log(result)
        if (result === 'win!') {
            playerScore = playerScore + 1;
        }
        else if (result === 'lose!'){
            computerScore = computerScore +1;
        }
        console.log(`Round: ${i + 1}`);
        console.log(round);
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
    let score = `Player: ${playerScore} Computer: ${computerScore}.`;
    return `${winner} ${score}`
}
