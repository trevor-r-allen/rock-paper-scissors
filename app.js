const choices = {
  rock: {beats:"scissors"},
  paper: {beats:"rock"},
  scissors: {beats:"paper"}
}

function play(playerChoice) {
  let computerChoice = randomChoice();console.log(computerChoice);
  console.log(choices[computerChoice].beats);
  if(playerChoice == computerChoice) {
    document.getElementById("resultMessage").textContent = "Equilibrium :|"
    return alert("Computer chose " + computerChoice + ", it's a DRAW!")
  }
  else if(playerChoice == choices[computerChoice].beats) {
    document.getElementById("resultMessage").textContent = "Condolences :("
    return alert("Computer chose " + computerChoice + ", YOU LOSE!")
  }
  document.getElementById("resultMessage").textContent = "Congratulations :D"
  return alert("Computer chose " + computerChoice + ", YOU WIN!")
}

function randomChoice(){
  let choiceArr = Object.keys(choices)
  return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}
