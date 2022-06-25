const score = {
    player: 0,
    computer: 0,
}
const buttons = document.querySelectorAll('button');
console.log(buttons);

function playRound(e) {
    const choices = ['rock', 'paper', 'scissors'];
    // console.log(typeof e.target.id);
    let pChoice = e.target.id;
    let cChoice = choices[Math.floor(Math.random() * choices.length)]

    console.log(`Player picked: ${pChoice}`)
    console.log(`Computer picked: ${cChoice}`);
    
    if (pChoice === cChoice) console.log("You tied!");
    else if (pChoice === 'rock' && cChoice === 'scissors' ||
            pChoice === 'paper' && cChoice === 'rock' ||
            pChoice === 'scissors' && cChoice === 'paper') {
                console.log("You won!");
                ++score.player
            }
    else {console.log("You lost!");
        ++score.computer;}

    console.log(`Current Score: ${score.player} to ${score.computer}.`)
};

buttons.forEach(button => addEventListener('click', playRound));
