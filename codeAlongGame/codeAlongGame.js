const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('options-buttons');

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
    textNode.options.forEach(option => {
        if(showOption(option)){
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click',() => selectOption(option))
          optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
    const nextTextNodeId = option.nextText
    if(nextTextNodeId <= 0){
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'you wake up in a strange place and you see a jar of blue goo near you.',
        options: [
            {
                text:'take goo',
                setState:{ blueGoo: true},
                nextText: 2
            },
            {
                text:'leave the goo',
                nextText: 2
            },
            {
                text:'Drink the blue goo',
                setState:{ blueGoo:true },
                nextText:6
            }
        ]
    },
    {
        id:2,
        text: 'you venture forth in search of answers to where you are when you come across a merchant.',
        options:[
            {
                text:' trade the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText:8
            },
            {
                text:' trade the goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText:28
            },
            {
                text:'tell about your love for blue goo',
                requiredState: (currentState) => currentState.blueGoo,
                setState:{ blueGoo:true},
                nextText:3
            },
            {
                text:' Ignore the merchant',
                nextText:6
            }
        ]
    },
    {
        id:3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options:[
            {
                text:' Explore the castle',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText:4
            },
            {
                text:'Find a room to sleep at in the town',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText:4
            },
            {
                text:'Find some hay in a stable to sleep in',
                nextText:4
            }
        ]
    },
    {
        id:4,
        text: 'After exploring the castle you come across a wizzard saying you can either have a magic sword or a magic shield.',
        options:[
            {
                text:' Explore the castle',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText:4
            },
            {
                text:'Find a room to sleep at in the town',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText:5
            },
            {
                text:'Find some hay in a stable to sleep in',
                nextText:6
            }
        ]
    },
    {
        id:5,
        text: 'You are so tired you fall asleep while exploring the castle and are killed by some terrible monster in your sleep',
        options:[
            {
                text:'Restart',
                nextText: -1
            }
        ]
    },
    {
        id:6,
        text: ' You become drunk and stumble into a saloon',
        options:[
            {
                text:'Sell your blue goo',
                setState:{ blueGoo:true },
                nextText:26
            },
            {
                text:'pour out blue gloo',
                setState:{ blueGoo:true },
                nextText:27
            }
        ]
    },
    
    {
        id:7,
        text:' get robbed & killed by bandits',
        options:[
            {
                text:'Restart',
                setState:{ blueGoo:true },
                nextText: -1
            
            }
        ]
        
    },   {
        id:8,
        text: 'Come upon a group of bandits. ',
        options:[
            {
                text:'take their treasure ',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:9
            },
            {
                text:'run away',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, shield: true},
                nextText:5
            },
            {
                text:'slay them and collect a reward',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, shield: true},
                nextText:14
            }
        ]
    },
       {
        id:9,
        text: 'You are loaded with treasure and now you come upon a town, do you. ',
        options:[
            {
                text:'buy food and drinks',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:10
            },
            {
                text:'continue home to your family',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, shield: true},
                nextText:11
            },
            {
                text:'go and buy gifts for your family',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:10
            }
        ]
    },
       {
        id:10,
        text: 'You eat and decide to take a nap, when  you awake ',
        options:[
            {
                text:'hear music & laughter and go to investigate',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:11
            },
            {
                text:'continue home to your family',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, shield: true},
                nextText:12
            },
            {
                text:'decide to go dragon hunting',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:13
            }
        ]
    },
    {
        id:11,
        text: 'stumble across another group of bandits and get robbed and killed',
        options:[
            {
                text:'Restart',
                setState:{ blueGoo:true },
                nextText: -1
            
            }
           
        ]
    },
    {
        id:12,
        text: 'make it home with all of your bounty and live to see another day',
        options:[
            {
                text:'Restart',
                setState:{ blueGoo:true },
                nextText: -1
            
            }
           
        ]
    },
    {
        id:13,
        text: 'and meet up with a group of hunters who ask if.',
        options:[
            {
                text:'you want to join their team and dragin hunt together',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:14
            },
            {
                text:'hunt the dragon by yourself',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, shield: true},
                nextText:12
            },
            {
                text:'run away while you still can',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:13
            }
        ]
    },
    {
     
        id:14,
        text: 'you are offered a job as the head of the army',
        options:[
            {
                text:'take the job and become known as the bandit hunter',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:15
            },
            {
                text:'turn down the job and return home',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:17
            },
            {
                text:'turn down the job and ask for a reward',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:19
            },
        ]
    },
    {
     
        id:15,
        text: 'you lead the army to great victory and become friends with the king , who ask if ?',
        options:[
            {
                text:'You would like to marry his sister',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:16
            },
            {
                text:'become Govener of your own area',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:18
            },
            {
                text:'be paid and return home',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:5
            },
        ]
    },
    {
        id:16,
        text:'you have a huge wedding and get eaten by a dragon',
        options:[
            {
                text:'Restart',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText: -1
            
            }
        ]
    },
    {
        id:17,
        text: 'you live to see the age of 125',
        options:[
            {
                text:'Restart',
                nextText: -1
            }
        ]
    },
    {
        id:18,
        text: 'your job last for ten years and you become king, the end',
        options:[
            {
                text:'Restart',
                nextText: -1
            }
        ]
    },
    {
        id:19,
        text: 'you are given 10,000 gold coins for your service and then you',
        options:[
            {
                text:'are offered a visit to the future for 8,000 gold coins',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:20
            },
            {
                text:'are offered a visit to the past for 9,000 gold coins',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:21
            }
        ]
    },
    {
        id:20,
        text: 'you take the trip 300 years into the future and get a glimpse of life where',
        options:[
            {
                text:'you are told you can stay and forget about the past',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:22
            },
            {
                text:'you are told you can take back any two items you want',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:23
            }
        ]
    },
    {
        id:21,
        text: 'you take the trip 50 years into the past and get a glimpse of life where',
        options:[
            {
                text:'you are told you can stay and forget about the past',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:24
            },
            {
                text:'you are told you can take back any two items you want',
                requiredState: (currentState) => currentState.sword,
                setState: { blueGoo: false, sword: true},
                nextText:25
            }
        ]
    },
    {
        id:22,
        text: 'you stay and now have to relearn to live in a new era',
            options:[
                {
                    text:'Restart',
                    nextText: -1
                }
            ],
        
    },
    
    {
        id:23,
        text: 'you return with a car and a gun but wind-up driving off a cliff ',
            options:[
                {
                    text:'Restart',
                    nextText: -1
                }
            ],
        
    },
    {
        id:24,
        text: 'met your father and try to tell him who you are but he kills you thinking you are a demon ',
            options:[
                {
                    text:'Restart',
                    nextText: -1
                }
            ],
        
    },
    {
        id:25,
        text: 'get all the blue you can to restart this journey ',
            options:[
                {
                    text:'Restart',
                    nextText: -1
                }
            ],
        
    },
    {
        id: 26,
        text: 'you sell yor blue and become one of the richest men in the world where',
        options: [
            {
                text:'you can start making blue goo',
                setState:{ blueGoo: true},
                nextText: 27
            },
            {
                text:'leave the blue goo alone and live your life',
                nextText: 23
            },
            {
                text:'live life happy ever aftere',
                setState:{ blueGoo:true },
                nextText:23
            }
        ]
    },
 
    {
        id:27,
        text: 'you become even richer selling blue goo',
            options:[
                {
                    text:'Restart',
                    nextText: -1
                }
            ],
        
    },
    {
        id:28,
        text: 'get killed by a fire breathing dragon',
            options:[
                {
                    text:'Restart',
                    nextText: -1
                }
            ],
        
    },

    
    
]
startGame()