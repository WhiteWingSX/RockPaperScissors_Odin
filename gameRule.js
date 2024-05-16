let playerScore = 0;
let comScore = 0;

const getComputerChoice = () => {

    let com = ''
    let randonNumber = Math.floor(Math.random() * 100);

    if (randonNumber < 33) com = 'rock'
    if (randonNumber > 33 && randonNumber < 66) com = 'paper'
    if (randonNumber > 66) com = 'scissor'

    return com;
}

const getHumanChoice = (player) => {

    return player.toLowerCase();
}

const playRound = (computer, human) => {

    console.log(`COM: ${computer}\nPlayer: ${human}`);

    if((human !== 'scissor' && human !== 'paper' && human !== 'rock')){
        console.log(`The command ${human} is invalid, please enter one of the next command: rock, paper, scissor`)
        return;
    }

    if(human === computer) {
        console.log('Tie Game');
        return
    }

    if ((human === 'paper' && computer === 'rock') || (human === 'scissor' && computer === 'paper') || (human === 'rock' && computer === 'scissor')){
        playerScore ++;
        console.log('Player Win !!!')
        console.log(`score: Player: ${playerScore} / COM: ${comScore}`)
    } else {
        comScore ++;
        console.log('you loose')
        console.log(`score: Player: ${playerScore} / COM: ${comScore}`)
    }

}

const playGame = () => {

    if(playerScore === 5) {
        console.log(`Game Over\n Player Win !!!`)
    } else if (comScore === 5) {
        console.log(`Game Over\n COM Win !!!`)
    }
}

while( comScore < 5 && playerScore < 5){

    const playerChoice = prompt('Please write: rock, paper or scissor:');
    const computer = getComputerChoice()
    const human = getHumanChoice(playerChoice)

    playRound(computer, human)
}
playGame()
