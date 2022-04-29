//variables of choices and text
const textBox = document.getElementById('textBox')
const decisions = document.getElementById('choices')
//inventory of player
let inventory ={}

//function for starting the game
function startGame(){
    inventory = {}
    showTextNode(1)
}

//function for showing text
function showTextNode(textNodeIndex){
 const textNode= textNodes.find(textNode => textNode.id === textNodeIndex)
    textBox.innerText = textNode.text
    while (decisions.firstChild){
        decisions.removeChild(decisions.firstChild)
    }
    textNode.options.forEach(option=>{
        if (showDecision(option)){
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('choiceButtons')
        button.addEventListener('click', () => selectDecision(option))
        decisions.appendChild(button)
    }
    })
}
function showDecision(option){
return decisions.requiredInventory == null || option.requiredInventory(inventory)

}

//function for making a decision
function selectDecision(option){
    const nextTextNodeId = option.nextText
    if(nextTextNodeId<=0){
        return startGame()
    }
    inventory = Object.assign(inventory, option.setInventory)
    showTextNode(nextTextNodeId)
}
//nodes with text
const textNodes = [
    {
        id: 1,
        text:'What is your name?"',
        options:[
            {
                text: 'daniel',
                nextText: 2
            },
            {
                text: 'rowan',
                nextText: 3
            },
        ]
    },
        {
            id: 2,
            text: '"imagine being daniel"',
            options:[
                {
                    text: 'aw, do i suck?',
                    nextText: 3

                },
            ]
        },
        {
            id: 3,
            text: '"you suck massive dongs"',
            options:[
                {
                    text: 'damn',
                    nextText: 3

                },
            ]
        },
        
]

//calls game function
startGame()