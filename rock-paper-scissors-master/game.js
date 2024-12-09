const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('paper')
const selectionBoard = document.getElementById('selection-board');
const playingBoard = document.getElementById('playing');
const userSelectedElem = document.getElementById('user-selection');
const computerSelectedElem = document.getElementById('computer-selection');
const pa = document.getElementById('pa');
const yp = document.getElementById('yp');
const thp = document.getElementById('thp');
const yw = document.getElementById('yw');
const yl = document.getElementById('yl');
const triangle = document.getElementById('bg-triangle')
const score = document.getElementById('score');
let numOne = 0;
score.textContent = numOne;

const selectionPieces = {
    rock: {
        borderColor: 'red',
        class: 'rock',
        src: './images/icon-rock.svg'
    },
    paper: {
        src: './images/icon-paper.svg',
        borderColor: 'blue',
        class: 'paper'

    },
    scissors: {
        class: 'scissors',
        borderColor: 'orange',
        src: './images/icon-scissors.svg'
    }
}

const selectionImages = ['rock', 'paper', 'scissors']

const gamePieces = document.getElementsByClassName('game-piece');

const retrieveComputerSelection = () => {
    const randomNum = Math.floor(Math.random() * 3);

    return selectionImages[randomNum];
}


for (let i = 0; i < gamePieces.length; i++) {
    gamePieces[i].addEventListener('click', (ev) => {
        const userSelection = gamePieces[i].id;
        selectionBoard.style.display = 'none';
        playingBoard.style.display = 'flex';
        userSelectedElem.firstElementChild.src = selectionPieces[userSelection].src;
        userSelectedElem.classList.add(selectionPieces[userSelection].class);

        //Play Again
        const pa = document.getElementById('pa');
        pa.addEventListener('click', () => {
            playingBoard.style.display = 'none';
            selectionBoard.style.display = 'block';
            userSelectedElem.classList.remove('rock', 'paper', 'scissors')
            document.getElementById('winning-status').style.visibility = 'hidden';

        })

        const computerSelection = retrieveComputerSelection()
        computerSelectedElem.firstElementChild.src = selectionPieces[computerSelection].src;
        computerSelectedElem.style.borderColor = selectionPieces[computerSelection].borderColor;
        computerSelectedElem.classList.remove('rock', 'paper', 'scissors');
        computerSelectedElem.classList.add(selectionPieces[computerSelection].class);

        whoTheWinner();
    })
}

function generateStatusText(msg) {
    document.getElementById('winning-status').style.visibility = 'visible';
    document.getElementById('winning-status').textContent = msg;
}

function whoTheWinner() {
    if (userSelectedElem.classList[1] === 'paper' && computerSelectedElem.classList[1] === 'rock') {
        generateStatusText('You Win');
        numOne++;
        score.textContent = numOne;
        // yw.style.visibility = 'visible';
        // yw.textContent = 'You Win'
        return;
    } else if (userSelectedElem.classList[1] === 'rock' && computerSelectedElem.classList[1] === 'scissors') {
        generateStatusText('You Win');
        numOne++;
        score.textContent = numOne;
        // yw.style.visibility = 'visible';
        return;
    } else if (userSelectedElem.classList[1] === 'scissors' && computerSelectedElem.classList[1] === 'paper') {
        generateStatusText('You Win');
        numOne++;
        score.textContent = numOne;
        // yw.style.visibility = 'visible';
        return;
    } else if (computerSelectedElem.classList[1] === 'rock' && userSelectedElem.classList[1] === 'paper') {
        generateStatusText('You Lose');
        numOne--;
        score.textContent = numOne;
        // yl.style.visibility = 'visible';
        // yw.textContent = 'You Lose';
        return;
    } else if (computerSelectedElem.classList[1] === 'rock' && userSelectedElem.classList[1] === 'scissors') {
        generateStatusText('You Lose');
        numOne--;
        score.textContent = numOne;
        // yl.style.visibility = 'visible';
        return;
    } else if (computerSelectedElem.classList[1] === 'scissors' && userSelectedElem.classList[1] === 'paper') {
        generateStatusText('You Lose');
        numOne--;
        score.textContent = numOne;
        // yl.style.visibility = 'visible';
        return;
    }
    else {
        generateStatusText('Its a tie');
        // console.log('Its a Tie')
    }


}
