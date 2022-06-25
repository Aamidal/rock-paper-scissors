const score = {
    player: 0,
    computer: 0,
}
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results')

function displayResults(result) {
    let roundResult = document.createElement('h2');
    let outcomes = {
        'win': `You won the round!<br>Current score:<br>
                You: ${score.player}<br>Comp:${score.computer}`,
        'loss': `You lost the round!<br>Current score:<br>
                You: ${score.player}<br>Comp:${score.computer}`,
        'tie': `You tied the round!<br>Current score:<br>
                You: ${score.player}<br>Comp:${score.computer}`
    }    
    roundResult.innerHTML = outcomes[result];
    results.appendChild(roundResult)
}

function playRound(e) {
    const choices = ['rock', 'paper', 'scissors'];
    let result = null;
    let pChoice = e.target.id;
    let cChoice = choices[Math.floor(Math.random() * choices.length)]
    results.innerHTML = ''
    console.log(`Player picked: ${pChoice}`)
    console.log(`Computer picked: ${cChoice}`);
    
    if (pChoice === cChoice) result = 'tie';
    else if (pChoice === 'rock' && cChoice === 'scissors' ||
            pChoice === 'paper' && cChoice === 'rock' ||
            pChoice === 'scissors' && cChoice === 'paper') {
                ++score.player
                result = 'win';
            }
    else {
        ++score.computer;
        result = 'loss';   
    }
    displayResults(result);
    console.log(`Current Score: ${score.player} to ${score.computer}.`)
};

buttons.forEach(button => addEventListener('click', playRound));
