const deckOfCards = [
    {
        suit: 'hearts',
        value: 2,
        img: './SVG-cards-1.3/2_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 3,
        img: './SVG-cards-1.3/3_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 4,
        img: './SVG-cards-1.3/4_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 5,
        img: './SVG-cards-1.3/5_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 6,
        img: './SVG-cards-1.3/6_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 7,
        img: './SVG-cards-1.3/7_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 8,
        img: './SVG-cards-1.3/8_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 9,
        img: './SVG-cards-1.3/9_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 10,
        img: './SVG-cards-1.3/10_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'K',
        img: './SVG-cards-1.3/king_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_hearts.svg'
    },
    {
        suit: 'diamonds',
        value: 2,
        img: './SVG-cards-1.3/2_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 3,
        img: './SVG-cards-1.3/3_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 4,
        img: './SVG-cards-1.3/4_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 5,
        img: './SVG-cards-1.3/5_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 6,
        img: './SVG-cards-1.3/6_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 7,
        img: './SVG-cards-1.3/7_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 8,
        img: './SVG-cards-1.3/8_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 9,
        img: './SVG-cards-1.3/9_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 10,
        img: './SVG-cards-1.3/10_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'K',
        img: './SVG-cards-1.3/king_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_diamonds.svg'
    },
    {
        suit: 'clubs',
        value: 2,
        img: './SVG-cards-1.3/2_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 3,
        img: './SVG-cards-1.3/3_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 4,
        img: './SVG-cards-1.3/4_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 5,
        img: './SVG-cards-1.3/5_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 6,
        img: './SVG-cards-1.3/6_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 7,
        img: './SVG-cards-1.3/7_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 8,
        img: './SVG-cards-1.3/8_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 9,
        img: './SVG-cards-1.3/9_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 10,
        img: './SVG-cards-1.3/10_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'K',
        img: './SVG-cards-1.3/king_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_clubs.svg'
    },
    {
        suit: 'spades',
        value: 2,
        img: './SVG-cards-1.3/2_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 3,
        img: './SVG-cards-1.3/3_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 4,
        img: './SVG-cards-1.3/4_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 5,
        img: './SVG-cards-1.3/5_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 6,
        img: './SVG-cards-1.3/6_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 7,
        img: './SVG-cards-1.3/7_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 8,
        img: './SVG-cards-1.3/8_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 9,
        img: './SVG-cards-1.3/9_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 10,
        img: './SVG-cards-1.3/10_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'K',
        img: './SVG-cards-1.3/king_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_spades.svg'
    },
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
};

// console.log(shuffleArray(deckOfCards))

// play areas
const dealer = document.getElementById('dealer')
const player = document.getElementById('player')

// buttons
const dealBtn = document.getElementById('deal')
const hitBtn = document.getElementById('hit')
const stayBtn = document.getElementById('stay')

// events
dealBtn.addEventListener('click', handleDealing)
hitBtn.addEventListener('click', handleHit)
stayBtn.addEventListener('click', handleStay)

// hands
myDeck = shuffleArray(deckOfCards)
const dealerCards = []
const playerCards = []


//faces
const faces = ['J', 'Q', 'K']

function handleDealing() {
    // reset
    dealer.innerHTML = ''
    player.innerhtml = ''
    // shuffled cards

    // deal
    for (let i = 0; i < 2; i++) {
        playerCards.push(myDeck.shift())
        dealerCards.push(myDeck.shift())
        console.log(dealerCards)
        console.log(playerCards)
    }

    // create card
    for (let p = 0; p < playerCards.length; p++) {
        let myScene = document.createElement('div')
        let myCard = document.createElement('div')
        let myFront = document.createElement('div')
        let myBack = document.createElement('div')
        let myFace = document.createElement('img')
        let myDesign = document.createElement('div')

        myFace.src = playerCards[p].img
        myScene.classList.add('scene')
        myCard.classList.add('card')
        myFront.classList.add('card_face', 'front')
        myBack.classList.add('card_face', 'back')
        myDesign.classList.add('design')
        myBack.append(myDesign)
        myFront.append(myFace)
        myCard.append(myFront)
        myCard.append(myBack)
        myScene.append(myCard)
        player.append(myScene)

        //change face values
        let aces = []
        playerCards.map((card) => {
            if (faces.includes(card.value)) {
                card.value = 10
            }
            if (card.value === 'A') {
                card.value = 11
                aces.push('1')
            }
            if (aces.length > 1) {
                card.value = 1
            }
        })
    }

    for (let h = 0; h < dealerCards.length; h++) {
        let myScene = document.createElement('div')
        let myCard = document.createElement('div')
        let myFront = document.createElement('div')
        let myBack = document.createElement('div')
        let myFace = document.createElement('img')
        let myDesign = document.createElement('div')
        myFace.src = dealerCards[h].img
        myScene.classList.add('scene')
        myCard.classList.add('card')
        myFront.classList.add('card_face', 'front')
        myBack.classList.add('card_face', 'back')
        myDesign.classList.add('design')
        myBack.append(myDesign)
        myFront.append(myFace)
        myCard.append(myFront)
        myCard.append(myBack)
        myScene.append(myCard)
        dealer.append(myScene)
        if (h === 0) {
            myCard.classList.add('flipped')
        }
        let aces = []
        dealerCards.map((card) => {
            if (faces.includes(card.value)) {
                card.value = 10
            }
            if (card.value === 'A') {
                card.value = 11
                aces.push('1')
            }
            if (aces.length > 1) {
                dealerCards[1].value = 1
            }
        })
    }

    //calculations
    countScore(dealerCards)
    countScore(playerCards)
    console.log(countScore(dealerCards), countScore(playerCards))

    if (countScore(playerCards) === 21 && countScore(dealerCards) === 21) {
        push()
    }
    if (countScore(playerCards) === 21) {
        winDouble()
    }
    if (countScore(dealerCards) === 21) {
        youLose()
    }
}

// hit me
function handleHit() {
    playerCards.push(myDeck.shift())
    for (let n = 2; n < playerCards.length; n++) {
        let myScene = document.createElement('div')
        let myCard = document.createElement('div')
        let myFront = document.createElement('div')
        let myBack = document.createElement('div')
        let myFace = document.createElement('img')
        let myDesign = document.createElement('div')
        myFace.src = playerCards[n].img
        myScene.classList.add('scene')
        myCard.classList.add('card')
        myFront.classList.add('card_face', 'front')
        myBack.classList.add('card_face', 'back')
        myDesign.classList.add('design')
        myBack.append(myDesign)
        myFront.append(myFace)
        myCard.append(myFront)
        myCard.append(myBack)
        myScene.append(myCard)
        player.append(myScene)
        if (playerCards.length > 3) {
            // myFace.src = playerCards[].img
        }

        //change face values
        let aces = []
        playerCards.map((card) => {
            if (faces.includes(card.value)) {
                card.value = 10
            }
            if (card.value === 'A') {
                card.value = 11
                aces.push('1')
            }
            if (aces.length > 1) {
                playerCards[1].value = 1
            }
        })

        //recalculate
        countScore(playerCards)
        playerCards.map((card) => {
            if (card.value === 'A' && countScore(playerCards) > 21) {
                card.value = 1
                countScore(playerCards)
            }
        })
        console.log(countScore(playerCards))

        //busted
        if (countScore(playerCards) > 21) {
            youBust()
        }
    }
}

//stay
function handleStay() {
    // calculate
    // countScore(dealerCards)
    // countScore(playerCards)
    console.log(countScore(dealerCards), countScore(playerCards))

    // dealer stays
    if (countScore(dealerCards) >= 17) {
        if (countScore(playerCards) === countScore(dealerCards)) {
            push()
            console.log(countScore(dealerCards), countScore(playerCards))
            return
        }
        if (countScore(playerCards) > countScore(dealerCards)) {
            youWin()
            console.log(countScore(dealerCards), countScore(playerCards))
            return
        }
        if (countScore(playerCards) < countScore(dealerCards)) {
            youLose()
            console.log(countScore(dealerCards), countScore(playerCards))
            return
        }
    }
    // dealer hits
    while (countScore(dealerCards) < 17) {
        // countScore(dealerCards)
        for (let h = 2; h < dealerCards.length; h++) {
            let myScene = document.createElement('div')
            let myCard = document.createElement('div')
            let myFront = document.createElement('div')
            let myBack = document.createElement('div')
            let myFace = document.createElement('img')
            let myDesign = document.createElement('div')
            myFace.src = dealerCards[h].img
            myScene.classList.add('scene')
            myCard.classList.add('card')
            myFront.classList.add('card_face', 'front')
            myBack.classList.add('card_face', 'back')
            myDesign.classList.add('design')
            myBack.append(myDesign)
            myFront.append(myFace)
            myCard.append(myFront)
            myCard.append(myBack)
            myScene.append(myCard)
            dealer.append(myScene)

            // change value
            let aces = []
            dealerCards.map((card) => {
                if (faces.includes(card.value)) {
                    card.value = 10
                }
                if (card.value === 'A') {
                    card.value = 11
                    aces.push('1')
                }
                if (aces.length > 1) {
                    dealerCards[1].value = 1
                }

            })
        }
        // recalculate dealer
        console.log(countScore(dealerCards), countScore(playerCards))
        dealerCards.map((card) => {
            if (card.value === 'A' && countScore(dealerCards) > 21) {
                card.value = 1

            }
        })


        // console.log(countScore(dealerCards), countScore(playerCards))

        // dealer stays
        if (countScore(dealerCards) >= 17 && countScore(dealerCards) <= 21) {
            if (countScore(playerCards) === countScore(dealerCards)) {
                push()
                console.log(countScore(dealerCards), countScore(playerCards))
                return
            }

            if (countScore(playerCards) > countScore(dealerCards)) {
                youWin()
                console.log(countScore(dealerCards), countScore(playerCards))
                return
            }
            if (countScore(playerCards) < countScore(dealerCards)) {
                youLose()
                console.log(countScore(dealerCards), countScore(playerCards))
                return
            }
        }
        if (countScore(dealerCards) > 21) {
            console.log(countScore(dealerCards), countScore(playerCards))
            houseBust()
            return
        }
    }
}




//calculate
function countScore(arr) {
    let score = arr.reduce((total, current) => total + current.value, 0)
    return score
}

// win, lose, or push
function youWin() {
    console.log('you win')
    hitBtn.removeEventListener
    stayBtn.removeEventListener
    return
}

function winDouble() {
    console.log('you win double')
    hitBtn.removeEventListener
    stayBtn.removeEventListener
    return
}

function youLose() {
    console.log('you lose')
    hitBtn.removeEventListener
    stayBtn.removeEventListener
    return
}

function push() {
    console.log('push')
    hitBtn.removeEventListener
    stayBtn.removeEventListener
    return
}

function youBust() {
    console.log('Busted')
    hitBtn.removeEventListener
    stayBtn.removeEventListener
    return
}

function houseBust() {
    console.log('house busts')
    hitBtn.removeEventListener
    stayBtn.removeEventListener
    return
}
