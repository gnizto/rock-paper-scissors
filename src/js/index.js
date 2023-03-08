String.prototype.toTitleCase = function() {
  let strLower = this.toLocaleLowerCase();
  return strLower.slice(0,1).toUpperCase() + strLower.slice(1);
}

const getRandomNumber = (lessThan) => Math.floor(Math.random() * lessThan);
const getBeatsSentence = (winner, looser) => `${winner.toTitleCase()} beats ${looser.toLowerCase()}!`;

const choices = {
  rock:     'scissors', 
  paper:    'rock', 
  scissors: 'paper'
}

const choicesArray = [...Object.keys(choices)];

function getComputerChoice() {
  let choice = choicesArray[getRandomNumber(choicesArray.length)];
  return choice;
}

function getResultSentence(resultFlag, playerSelection, computerSelection) {
  let resultSentence;
  switch (true){
    case(resultFlag === 'won'): 
      resultSentence = `You Win! ${getBeatsSentence(playerSelection, computerSelection)}`;
      break;
    case(resultFlag === 'lost'): 
      resultSentence = `You Loose! ${getBeatsSentence(computerSelection, playerSelection)}`;
      break;
    default: 
      resultSentence = `It's a Draw! Both choose ${computerSelection}!`;
      break;
  }
  return resultSentence;
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();

  let playerWon = false;
  let computerWon = false;

  playerWon = choices[playerSelectionLower] === computerSelection;
  computerWon = choices[computerSelection] === playerSelectionLower;

  let playerResultFlag = playerWon ? 'won' : computerWon ? 'lost': 'draw';

  let resultSentence = getResultSentence(playerResultFlag, playerSelection, computerSelection);

  let result = {
    sentence: resultSentence,
    playerPoint: playerWon ? 1 : 0,
    computerPoint: computerWon ? 1 : 0
  }

  return result;
}

function game() {
  let score = {
    player: 0,
    computer: 0
  }

  for (let round = 1; round <= 5; round++){
    do {
      var playerSelection = prompt(`(Round ${round})\nPick one [rock, paper, scissors]:`).toString();
    } while (!choicesArray.includes(playerSelection.toLowerCase()));
    
    let resultRound = playRound(playerSelection, getComputerChoice()); 

    score.player+= resultRound.playerPoint;
    score.computer+= resultRound.computerPoint;
    console.log(`Round ${round}: ${resultRound.sentence}`);
  }

  let finalResult = score.player > score.computer ? 'You won!' :
                    score.computer > score.player ? 'You lost!' :
                    'It\'s a draw!';
  console.log(finalResult + ` You made ${score.player} vs ${score.computer}!`);
}

game();

// let playerSelection = 'rock';
// let computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));
