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
  checkScore(userScore, computerScore, computer, winner);
  document.getElementById("userScore").textContent = userScore.toString();
  document.getElementById("computerScore").textContent = computerScore.toString();
}

function checkScore(userScore, computerScore, computer, winner) {
  if (userScore === 5) {
    document.getElementById("choose").textContent = "You have beat the computer, press reset to play again.";
  }

  else if (computerScore === 5) {
    document.getElementById("choose").textContent = "You lost to the computer, press reset to play again";
  }
  else {
    document.getElementById("choose").textContent = "Computer chose " + computer + ". " + winner + " Choose again:";
  }
}

function rock() {
  let userChoice = "rock";

  if (userScore === 5 || computerScore === 5) {
    document.getElementById("choose").textContent = "Please press reset to start a new game";
  }
  else {
    run(userChoice)
  }
}

function paper() {
  let userChoice = "paper";

  if (userScore === 5 || computerScore === 5) {
    document.getElementById("choose").textContent = "Please press reset to start a new game";
  }
  else {
    run(userChoice)
  }
}

function scissors() {
  let userChoice = "scissors";

  if (userScore === 5 || computerScore === 5) {
    document.getElementById("choose").textContent = "Please press reset to start a new game";
  }
  else {
    run(userChoice)
  }
}

function reset() {
  userScore = 0
  computerScore = 0

  document.getElementById("userScore").textContent = userScore.toString();
  document.getElementById("computerScore").textContent = computerScore.toString();
  document.getElementById("choose").textContent = "Choose one:";
}