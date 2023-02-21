const getRandomNumber = (lessThan) => Math.floor(Math.random() * lessThan);

function getComputerChoice() {
  // TODO: create logic here (step 3)
  const choices = ['rock', 'paper', 'scissors'];
  let choice = choices[getRandomNumber(choices.length)];
  return choice;
}