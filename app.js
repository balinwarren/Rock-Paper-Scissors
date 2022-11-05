let userScore = 0;
let computerScore = 0;

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor((Math.random()*choices.length))];
}

function calcWin(user, computer) {
  if (user === computer) {
    return "Draw!";
  }
  else if (user === "rock" && computer === "scissors"){
    return "Player Wins!";
  }
  else if (user === "rock" && computer === "paper"){
    return "Computer Wins!";
  }
  else if (user === "paper" && computer === "rock"){
    return "Player Wins!";
  }
  else if (user === "paper" && computer === "scissors"){
    return "Computer Wins!";
  }
  else if (user === "scissors" && computer === "paper"){
    return "Player Wins!";
  }
  else if (user === "scissors" && computer === "rock") {
    return "Computer Wins!";
  }
}

function run(userChoice) {
  let computer = computerChoice();

  let winner = calcWin(userChoice, computer);
  if (winner === "Player Wins!") {
    userScore++;
  }
  else if (winner === "Computer Wins!") {
    computerScore++;
  }
  document.getElementById("choose").textContent = "Computer chose " + computer + ". " + winner + " Choose again:";
  document.getElementById("userScore").textContent = userScore.toString();
  document.getElementById("computerScore").textContent = computerScore.toString();
}

function rock() {
  let userChoice = "rock";

  run(userChoice);
}

function paper() {
  let userChoice = "paper";

  run(userChoice);
}

function scissors() {
  let userChoice = "scissors";

  run(userChoice)
}

function reset() {
  userScore = 0
  computerScore = 0

  document.getElementById("userScore").textContent = userScore.toString();
  document.getElementById("computerScore").textContent = computerScore.toString();
  document.getElementById("choose").textContent = "Choose one:";
}