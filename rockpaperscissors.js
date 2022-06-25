const score = {
    player: 0,
    computer: 0,
    GamesWon: 0,
    GamesLost: 0,
}
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const currentScore = document.getElementById('currentScore');
const history = document.getElementById('history');

currentScore.textContent = `Current Score: ${score.player}-${score.computer}`

function displayResults(result, pChoice, cChoice) {
    let roundResult = document.createElement('h3');
    let choices = document.createElement('p');
    let outcomes = {
        'win': 'You won the round!',
        'loss': 'You lost the round!',
        'tie': 'You tied the round!',
        'matchwon': "You were the first to five! You WIN!",
        'matchlost': "The computer was the first to five! You LOSE!"
    }
    if (score.player < 5 && score.computer < 5) {
        roundResult.innerHTML = outcomes[result];
        results.appendChild(roundResult)
        currentScore.textContent = 
        `Current Score: ${score.player} - ${score.computer}`;
    }
    else if (score.player = 5) {
        roundResult.innerHTML = outcomes['matchwon'];
        results.appendChild(roundResult);
        ++score.GamesWon;
        history.textContent =
                 `Games won: ${score.GamesWon} Games lost: ${score.GamesLost}`;
        score.player = 0;
        score.computer = 0;
        currentScore.textContent = 
        `Current Score: ${score.player} - ${score.computer}`;
    }
    else {
        roundResult.innerHTML = outcomes['matchlost'];
        results.appendChild(roundResult);
        ++score.GamesLost;
        history.textContent =
                 `Games won: ${score.GamesWon} Games lost: ${score.GamesLost}`;
        score.player = 0;
        score.computer = 0;
        currentScore.textContent = 
        `Current Score: ${score.player} - ${score.computer}`;
    }
    choices.textContent = `You played ${pChoice} against ${cChoice}!`
    results.appendChild(choices);
}

function playRound(e) {
    const choices = ['rock', 'paper', 'scissors'];
    let result = null;
    let pChoice = e.target.id;
    let cChoice = choices[Math.floor(Math.random() * choices.length)]
    
    if (!choices.includes(pChoice)) return;

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
    results.innerHTML = ''
    displayResults(result, pChoice, cChoice);
};

buttons.forEach(button => addEventListener('click', playRound));

