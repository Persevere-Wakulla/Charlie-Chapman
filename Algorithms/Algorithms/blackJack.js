const deckOfCards = [
  {
    suit: 'hearts',
    value: 2,
    src: './SVG-cards-1.3/2_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 3,
    src: './SVG-cards-1.3/3_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 4,
    src: './SVG-cards-1.3/4_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 5,
    src: './SVG-cards-1.3/5_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 6,
    src: './SVG-cards-1.3/6_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 7,
    src: './SVG-cards-1.3/7_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 8,
    src: './SVG-cards-1.3/8_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 9,
    src: './SVG-cards-1.3/9_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 10,
    src: './SVG-cards-1.3/10_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 10,
    src: './SVG-cards-1.3/jack_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 10,
    src: './SVG-cards-1.3/queen_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 10,
    src: './SVG-cards-1.3/king_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 'ace',
    // value: 11,
    src: './SVG-cards-1.3/ace_of_hearts.svg'
  },
  {
    suit: 'diamonds',
    value: 2,
    src: './SVG-cards-1.3/2_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 3,
    src: './SVG-cards-1.3/3_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 4,
    src: './SVG-cards-1.3/4_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 5,
    src: './SVG-cards-1.3/5_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 6,
    src: './SVG-cards-1.3/6_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 7,
    src: './SVG-cards-1.3/7_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 8,
    src: './SVG-cards-1.3/8_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 9,
    src: './SVG-cards-1.3/9_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 10,
    src: './SVG-cards-1.3/10_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 10,
    src: './SVG-cards-1.3/jack_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 10,
    src: './SVG-cards-1.3/queen_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 'ace',
    src: './SVG-cards-1.3/king_of_diamonds.svg'
  },
  {
    suit: 'diamonds',
    value: 'ace',
    // value: 11,
    src: './SVG-cards-1.3/ace_of_diamonds.svg'
  },
  {
    suit: 'clubs',
    value: 2,
    src: './SVG-cards-1.3/2_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 3,
    src: './SVG-cards-1.3/3_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 4,
    src: './SVG-cards-1.3/4_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 5,
    src: './SVG-cards-1.3/5_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 6,
    src: './SVG-cards-1.3/6_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 7,
    src: './SVG-cards-1.3/7_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 8,
    src: './SVG-cards-1.3/8_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 9,
    src: './SVG-cards-1.3/9_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 10,
    src: './SVG-cards-1.3/10_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 10,
    src: './SVG-cards-1.3/jack_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 10,
    src: './SVG-cards-1.3/queen_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 10,
    src: './SVG-cards-1.3/king_of_clubs.svg'
  },
  {
    suit: 'clubs',
    value: 'ace',
    // value2: 11,
    src: './SVG-cards-1.3/ace_of_clubs.svg'
  },
  {
    suit: 'spades',
    value: 2,
    src: './SVG-cards-1.3/2_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 3,
    src: './SVG-cards-1.3/3_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 4,
    src: './SVG-cards-1.3/4_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 5,
    src: './SVG-cards-1.3/5_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 6,
    src: './SVG-cards-1.3/6_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 7,
    src: './SVG-cards-1.3/7_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 8,
    src: './SVG-cards-1.3/8_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 9,
    src: './SVG-cards-1.3/9_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 10,
    src: './SVG-cards-1.3/10_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 10,
    src: './SVG-cards-1.3/jack_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 10,
    src: './SVG-cards-1.3/queen_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 10,
    src: './SVG-cards-1.3/king_of_spades.svg'
  },
  {
    suit: 'spades',
    value: 'ace',
    // value2: 11,
    src: './SVG-cards-1.3/ace_of_spades.svg'
  },
];

const player = document.querySelector('.player');
const player2 = document.querySelector('.player2');
const imgSlide = document.querySelector('.img-holder');
const imgSlide2 = document.querySelector('.img-holder2');
const imgSlide3 = document.querySelector('.img-holder3');
const imgSlide4 = document.querySelector('.img-holder4');
const imgSlide5 = document.querySelector('.img-holder5');
const dealerHitBtn = document.querySelector('.button')
const playerCards = document.getElementById('forward');
const dealerFirstCard = document.getElementById('dealer-first-card');
const dealerSecondCard = document.getElementById('dealer-second-card');
const dealerThirdCard = document.getElementById('dealer-third-card');
const playerHitCard = document.getElementById('hit');
const restart = document.getElementById('new-game');
const btns = document.querySelectorAll('.bet');
const potAmount = document.getElementById('pot');
playerCards.addEventListener('click', forward);
let playerHand = []
let dealerHand = []

let cardPoints = []
let addedAmount = []
let money = 0;
let count = 0;
const amountBetted = document.querySelector('.bet-amount');
// function to get comp.& player cards
// function picks cards and removes them
function forward() {
  for (let i = 0; i < 2; i++) {
    playerHand.push(deckOfCards.shift())
    dealerHand.push(deckOfCards.shift())
  }
  imgSlide.src = playerHand[0].src;
  dealerFirstCard.src = dealerHand[0].src;
  imgSlide2.src = playerHand[1].src;
  dealerSecondCard.src = dealerHand[1].src;

  cardPoints.push(this.value)

  addPoints()
}
// funtion to hit dealer
function hitDealer() {
  dealerHand.push(deckOfCards.shift())
  dealerThirdCard.src = dealerHand[2].src;
  count++

}
// function to hit player
function hitMe() {
  playerHand.push(deckOfCards.shift())
  imgSlide3.src = playerHand[2].src;
  count++
  if (count > 1) {
    imgSlide4.src = playerHand[3].src;
    count++
    if (count > 3) {
      imgSlide5.src = playerHand[4].src
      count++
    }
  }
  addPoints()
}
// eventlisteners to hit player & dealer
dealerHitBtn.addEventListener('click', hitDealer)
playerHitCard.addEventListener('click', hitMe)
console.log(dealerHand)
console.log(playerHand)


// random card picker
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

// function for betting btns & bet amounts
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('bet-decrease')) {
      money -= 100;
    }
    else if (styles.contains('bet-increase')) {
      money += 100;
    } else {
      money = 0;
    }
    let winnings = 350 + money
    amountBetted.textContent = money;
    potAmount.textContent = winnings
  });
});

// function to add points
function addPoints() {
  let playerScore = 0;
  let computerScore = 0;
  let aces = []
  if(deckOfCards.value === 'ace'){
    card.value = 11;
    aces.push('1')
  }
  console.log(aces)
  if(aces.length > 1){
    deckOfCards.value = 1
  }
// if statements for score
  playerHand.forEach(card => {
    console.dir(card);
    playerScore += card.value;
  })
  dealerHand.forEach(card => {
    computerScore += card.value;
  })
  if(playerScore > computerScore){
    console.dir(`You won!`)
  }
  if(playerScore > 21){
    console.dir('Player Bust')
  }
  if(computerScore > 18 && playerScore < 18){
    console.dir('You lose')
  }
  if (computerScore > 21 && playerScore > 21){
    console.log('You win')
  }
  if( computerScore > 21){
    console.log('Computer bust')
    if(computerScore === playerScore){
      console.log(split)
    }
  }
}

//  button & function to reset game
restart.addEventListener('click', function (e) {
  amountBetted.textContent = 0;
  potAmount.textContent = 0;
  imgSlide.src = '';
  imgSlide2.src = '';
  imgSlide3.src = '';
  imgSlide4.src = '';
  imgSlide5.src = '';

  dealerFirstCard.src = '';
  dealerSecondCard.src = '';
  dealerThirdCard.src = '';
  playerScore = 0;
  computerScore = 0;
});



// shuffle deck
shuffleArray(deckOfCards)


