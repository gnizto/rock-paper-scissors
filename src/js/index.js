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

function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();

  let result = (choices[playerSelectionLower] === computerSelection) ?
                     1 : (choices[computerSelection] === playerSelectionLower) ?
                    -1 : 0;
  let sentence = (result === 1) ?
                    `You Win! ${getBeatsSentence(playerSelection, computerSelection)}`:
                 (result === -1)?
                    `You Loose! ${getBeatsSentence(computerSelection, playerSelection)}`:
                    `It's a Draw! Both choose ${computerSelection}!`
  console.log(sentence)
}

// TODO: keep on step 5
let playerSelection = 'rock';
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
