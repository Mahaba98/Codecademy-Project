console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('Please enter rock, paper, scissors or bomb !');
  }
}

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice){
    case 0 : 
      return 'rock';
      break;
    case 1 : 
      return 'paper';
      break;
    case 2 : 
      return 'scissors';
      break; 
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    if (computerChoice ===  'rock' || computerChoice === 'paper' ||computerChoice === 'scissors'){
        return 'User wins';
    }
  }

  if (userChoice === computerChoice){
    return 'Game is a tie';
  }

  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer wins';
    }
    else{
      return 'User wins';
    }
  }

  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer wins';
    }
    else{
      return 'User wins'
    }
  }
  
  if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer wins';
    }
    else {
      return 'User wins';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice =  getComputerChoice();
  console.log(`User choice : ${userChoice} and Computer choice : ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();