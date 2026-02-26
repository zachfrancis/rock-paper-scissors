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
  const message = document.querySelector("#message");
  if (checkWin(humanChoice, computerChoice)) {
    message.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    return "W";
  } else if (checkLoss(humanChoice, computerChoice)) {
    message.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    return "L";
  } else if (humanChoice === computerChoice) {
    message.innerText = `A tie! You both chose ${humanChoice}`;
    return "T";
  } else {
    message.innerText = `What are you trying to pull? ${humanChoice} isn't a valid choice.`;
    return "L";
  }
}

function incrementScore(elem) {
  let score = Number(elem.textContent);
  elem.textContent = ++score;
}

let humanScore = document.querySelector("#human-score");
let computerScore = document.querySelector("#cpu-score");
let result;

const buttons = document.querySelectorAll(".choice");
for (const button of buttons) {
  button.addEventListener("click", (event) => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);

    if (result === "W") {
      incrementScore(humanScore);
    } else if (result === "L") {
      incrementScore(computerScore);
    }
  });
}
