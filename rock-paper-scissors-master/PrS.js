// console.log(randomIndex(picks))

const paperElement = document.getElementById('one');
const handrockElement = document.getElementById('three');
const handscissorsElement = document.getElementById('two');
const computer_choiceElement = document.getElementById('computer_choice');
const picks = ['Paper', 'Rock', 'Scissors'];
// const player = ['handrock','paper','handscissors']
const winnerElement = document.getElementById('wins');
const oneElement = document.getElementById('one');
const twoElement = document.getElementById('two');
const threeElement = document.getElementById('three');
const statusElement = document.getElementById('count');
const player_choiceElement = document.getElementById('player_choice')
const playerElement = document.getElementById('player');
const scoreKeeper = document.getElementById('scorecount');
const resetElement = document.getElementById('playagain');
const picture = ['rockhand', 'paperhand', 'scissorhand'];
const computerChoiceImg = document.getElementById('computer_img')
const showRules = document.getElementById('rules');
const gameRules = document.getElementById('gamerules');
const showBoardElement = document.getElementById('showcase');
const reset = document.getElementById('startover')
let score = 1;
const computerDisplay = {
  rockhand: {
    borderColor: 'red',
    class: 'rock',
    src: './images/icon-rock.svg'
  },
  paperhand: {
    src: './images/icon-paper.svg',
    borderColor: 'blue',
    class: 'paper'

  },
  scissorshand: {
    class: 'scissors',
    borderColor: 'orange',
    src: './images/icon-scissors.svg'
  }
}
//function to remove imagess
oneElement.addEventListener('click', handleOne);
function handleOne() {
  player_choiceElement.innerHTML = `   <div class="img btn" id="one"><button type="submit" id="hand" >
    <img id="paper" src="images/icon-paper.svg" alt="paper-hand"></button>
    <!-- <button type="submit"  id="first">pick</button> -->
  </div>`
}
//function to remove imagess
twoElement.addEventListener('click', handleTwo)
function handleTwo() {
  player_choiceElement.innerHTML = `   <div class="img btn" id="two">
    <button type="submit" id="scissors">
    <img id="hand_scissors" src="images/icon-scissors.svg" alt="hand-scissors">
  </button>`
}
//function to remove imagess
threeElement.addEventListener('click', handleThree);
function handleThree() {
  player_choiceElement.innerHTML = `   <div class="img btn" id="three">
    <button  type="submit" id="rock">
    <img id="handrock" src="images/icon-rock.svg" alt="hand-rock">
  </button>
  </div>`
}
//random picker for computer pick
function randomIndex(arr) {
  const computerPick = arr.length;
  const randomPick = Math.floor(Math.random() * computerPick)
  // console.log(arr[randomPick]);
  return arr[randomPick];
}
//function for paper vs random computer pic
let userChoice = ''
function handlePaper() {
  let cpuPick = randomIndex(picks)
  paperClick()
  computerPicDisplay(cpuPick)
  userChoice = 'Paper'
  if (userChoice === 'Paper' && cpuPick === 'Rock') {
    statusElement.style.display = ""
    scoreKeeper.textContent = score++
    statusElement.textContent = ` You won!!`;
    statusElement.className = 'wins'
    // statusElement.style.color
    return;
  }
  if (userChoice === 'Paper' && cpuPick === 'Scissors') {
    scoreKeeper.textContent = score--
    statusElement.style.display = ""
    statusElement.textContent = 'Computer won!!'
    statusElement.className = 'wins'
    return
  }

  if (userChoice === 'Paper' && cpuPick === 'Paper') {
    statusElement.style.display = ""
    statusElement.textContent = " Game Tied!!"
    statusElement.className = 'wins'

    return
  }
  else {
    statusElement.style.display = ""
    statusElement.textContent = `Computer won!!`
    statusElement.className = 'wins'

  }
}
//function for rock vs random computer pic
function handleRock() {
  let cpuPick = randomIndex(picks)
  handrockClick()
  userChoice = 'Rock'
  computerPicDisplay(cpuPick)
  if (userChoice === 'Rock' && cpuPick === 'Scissors') {
    statusElement.style.display = ""
    scoreKeeper.textContent = score++
    statusElement.textContent = `You won!!`
    return;
  }
  if (userChoice === 'Rock' && cpuPick === 'Paper') {
    statusElement.style.display = ""
    scoreKeeper.textContent = score--
    statusElement.textContent = `Computer wins!!`
    return;

  } else {
    statusElement.style.display = ""
    statusElement.textContent = `Game Tied!!`
  }
}
//function for scissor vs random computer pic
function handlescissors() {
  let cpuPick = randomIndex(picks)
  scissorsClick()
  userChoice = 'Scissors'
  console.log(userChoice)
  console.log(cpuPick)
  computerPicDisplay(cpuPick)
  if (userChoice === 'Scissors' && cpuPick === 'Rock') {
    statusElement.style.display = ""
    scoreKeeper.textContent = score++
    statusElement.textContent = 'Computer wins'
    // scoreKeeper.textContent = score--
    console.log(score)
    return;
  }
  if (userChoice === 'Scissors' && cpuPick === 'Paper') {
    statusElement.style.display = ""
    scoreKeeper.textContent = score++
    statusElement.textContent = 'Player wins!! '
    return;
  } else {
    statusElement.style.display = ""
    statusElement.textContent = " Game Tied"
  }

}
// eventListener for paper
paperElement.addEventListener('click', handlePaper)
function paperClick() {
  let cpuPick = randomIndex(picks)
  handrockElement.style.display = 'none';
  handscissorsElement.style.display = 'none';
  computer_choiceElement.style.color = 'white';
  computer_choiceElement.textContent = cpuPick;
  showBoardElement.style.display = 'flex';
}
//function to display computer pic
function computerPicDisplay(computerChoice) {
  // console.log(cpuPick)
  if (computerChoice === 'Paper') {

    computerChoiceImg.src = computerDisplay.paperhand.src
    return;
  }
  if (computerChoice === 'Rock') {
    computerChoiceImg.src = computerDisplay.rockhand.src
    return;
  } else {
    computerChoiceImg.src = computerDisplay.scissorshand.src
  }

}
//eventListener for rock
handrockElement.addEventListener('click', handleRock)

function handrockClick() {
  handscissorsElement.style.display = 'none';
  paperElement.style.display = 'none';
  computer_choiceElement.style.color = 'white';
  // computer_choiceElement.textContent = cpuPick;
  showBoardElement.style.display = 'flex';
}

//eventListener for scissors
handscissorsElement.addEventListener('click', handlescissors)
function scissorsClick() {
  paperElement.style.display = 'none';
  handrockElement.style.display = 'none';
  computer_choiceElement.style.color = 'white';
  // computer_choiceElement.textContent = cpuPick;
  showBoardElement.style.display = 'flex';
}

resetElement.addEventListener('click', restart)
function restart() {
  paperElement.style.display = "";
  handrockElement.style.display = "";
  handscissorsElement.style.display = "";
  player_choiceElement.innerHTML = "";
  computer_choiceElement.style.display = "none";
  computerChoiceImg.src = "";
  showBoardElement.style.display = "";
  statusElement.style.display = "none"
}
reset.addEventListener('click',newScore)
function newScore(){
  scoreKeeper.style.display = "none"
}

showRules.addEventListener("mouseover",ruleDisplay)
showRules.addEventListener("mouseout",ruleDisappear)
function ruleDisplay() {
  // console.log('moused')
  gameRules.style.display = "block";
}
function ruleDisappear() {
  // console.log('moused')
  gameRules.style.display = "none";
}