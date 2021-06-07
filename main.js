const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput;
  }else{
    console.log("Provide a valid input")
  }
}


const getComputerChoice = () => {
  const wholeNum = Math.floor(Math.random() * 3);
  if(wholeNum === 0){
    return "rock";
  }else if(wholeNum === 1){
    return "paper";
  }else{
    return "scissors";
  }
} 


const determineWinner = (userChoice, computerChoice) => {
  
  if(userChoice === computerChoice){
    return "game was a tie!";
  }else{
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
    } else {
        return 'You won!';
    }
   }
   if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
      return 'The computer won!';
   } else {
      return 'You won!';
   }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
  } else {
      return 'You won!';
  }
  }

  }
}

const playGame = () =>{
  const userChoice = getUserChoice("paper");
  console.log('You threw: ' + userChoice);
  const computerChoice = getComputerChoice();
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); 

}
playGame();


