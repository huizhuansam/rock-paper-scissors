let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function convertToWord(arg) {
  switch (arg) {
    case "r":
      return "Rock";
      break;
    case "p":
      return "Paper";
      break;
    case "s":
      return "Scissors";
      break;
  }
}

function win(user, comp) {
  const translateUserChoice = convertToWord(user);
  const translateCompChoice = convertToWord(comp);
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${translateUserChoice}${smallUser} beats ${translateCompChoice}${smallComp}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(user, comp) {
  const translateUserChoice = convertToWord(user);
  const translateCompChoice = convertToWord(comp);
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${translateCompChoice}${smallComp} beats ${translateUserChoice}${smallUser}. You lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(user, comp) {
  const translateUserChoice = convertToWord(user);
  const translateCompChoice = convertToWord(comp);
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${translateUserChoice}${smallUser} equals ${translateCompChoice}${smallComp}. It's a draw!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
