const choices = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  spock: ["rock", "scissors"],
  lizard: ["spock", "paper"]
}

function play(playerChoice) {
  let computerChoice = randomChoice();console.log(computerChoice);
  console.log(choices[computerChoice].includes(playerChoice));
  if(playerChoice == computerChoice) {
    document.getElementById("resultMessage").textContent = "Equilibrium :|"
    return alert("Computer chose " + computerChoice + ", it's a DRAW!")
  }
  else if(choices[computerChoice].includes(playerChoice)) {
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

function drawButtons(){
  let choiceArr = Object.keys(choices)
  let buttons = ''
  choiceArr.forEach(choice => {buttons += `<button class="panel-body btn btn-outline-primary m-3" onclick="play('${choice}')">${choice.toUpperCase()}</button>`})

  document.getElementById('buttons').innerHTML = buttons
}
drawButtons()