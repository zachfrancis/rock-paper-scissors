function getComputerChoice() {
  const num = Math.floor(Math.random(3) * 3);
  switch (num) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;

    default:
      break;
  }
}

function getHumanChoice() {
  return prompt("Do you choose rock, paper, or scissors?");
}

function checkWin(humanChoice, computerChoice) {
  return (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  );
}

function checkLoss(humanChoice, computerChoice) {
  return (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  );
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (checkWin(humanChoice, computerChoice)) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "W";
  } else if (checkLoss(humanChoice, computerChoice)) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "L";
  } else if (humanChoice === computerChoice) {
    console.log(`A tie! You both chose ${humanChoice}`);
    return "T";
  } else {
    console.log(
      `What are you trying to pull? ${humanChoice} isn't a valid choice.`,
    );
    return "L";
  }
}

let humanScore = 0;
let computerScore = 0;
let result;

const buttons = document.querySelectorAll(".choice");
for (const button of buttons) {
  button.addEventListener("click", (event) => {
    const humanChoice = button.id;
    console.log(`Choice is ${humanChoice}`);
    const computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);

    if (result === "W") {
      humanScore++;
    } else if (result === "L") {
      computerScore++;
    }
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
  });
}
