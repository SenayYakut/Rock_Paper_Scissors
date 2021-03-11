const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput ===     "scissors" || userInput === "paper"){
    return userInput;
  }else{
    console.log("Error");
  }
};

console.log(getUserChoice("rock"));
console.log(getUserChoice("spoon"));
console.log(getUserChoice("Rock"));

