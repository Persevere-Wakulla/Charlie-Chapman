const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lasthole;
let timeUp = false;
let score = 0;

const btnElem = document.getElementById('btn');

// function for time
randomTime = (min, max) =>{
    return Math.random() * (max - min) + min;
};

// function for random hole
randomHole = (holes) =>{
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lasthole) {
        console.log('Ah nah thats the same one bud');
      return  randomHole(holes);
    }
    // console.log(hole);
    lasthole = hole;
    return hole;

}
randomHole(holes)
console.log(holes.length);
console.log(randomHole(holes));

// ? function to popup

// peep = () =>{
//     const time = randomTime(200, 1000);
//     const hole = randomHole(holes);
//     hole.classList.add('up');
//      console.log(peep());
//     }

    function peep(){
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout(() =>{
            hole.classList.remove('up');
            if(!timeUp) peep();
        }, time);
    }
// console.log(peep())

// evenlistener for btn
    btnElem.addEventListener('click',startGame)

    // function to start game
    function startGame() {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => timeUp = true, 9500)
    }

    // function to hit moles
    function bonk(e){
        if(!e.isTrusted) return; //cheater!
        score++;
        this.classList.remove('up');
        scoreBoard.textContent = score;
    }

    // for each for hitting moles
    moles.forEach(mole => mole.addEventListener('click', bonk));