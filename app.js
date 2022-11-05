let user = prompt("Rock Paper or Scissors?: ").toLowerCase();

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor((Math.random()*choices.length))];
}

let computer = computerChoice();

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

console.log(user + " vs " + computer + " " + calcWin(user, computer))