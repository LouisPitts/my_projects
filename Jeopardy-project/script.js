const game=document.getElementById('game')
const scoreDisplay=document.getElementById('score')
const jeopardycategories=[
    {
        genre:'WHO',
        questions:[
            {
                question:'Who wrote harry potter?',
                answers:['JK Rowling', 'JRR Talkien'],
                correct:'JK Rowling',
                level:'easy',
            },
            {
                question:'Who was faster?',
                answers:['Flash', 'Superman'],
                correct:'Flash',
                level:'medium',
            },
            {
                question:'Who designed the mustang?',
                answers:['optimus prime', 'Henry Ford'],
                correct:'Henry ford',
                level:'hard',
            }

        ],
    },
    {
        genre:'WHERE',
        questions:[
            {
                question:'Where did assassins creed unity take place?',
                answers:['France', 'London'],
                correct:'France',
                level:'easy'
            },
            {
                question:'Where did assassins creed valhalla take place?',
                answers:['England', 'Valhalla'],
                correct:'England',
                level:'medium'
            },
            {
                question:'Where did Assasins creed odyssey take place?',
                answers:['Rome', 'Greece'],
                correct:'Greece',
                level:'hard'
            },

        ],
    },
    {
        genre:'WHEN',
        questions:[
            {
                question:'When year did cyberpunk 2077 take place?',
                answers:['2077', '2020'],
                correct:'2077',
                level:'easy'
            },
            {
                question:'When did fortnite release?',
                answers:['2016', '2020'],
                correct:'2016',
                level:'hard'
            },
            {
                question:'When was callofduty good?',
                answers:['2020', '2015'],
                correct:'2015',
                level:'medium'
            },
        ],
    },
    {
        genre:'WHAT',
        questions:[
            {
                question:'What game won game of the year 2020?',
                answers:['God of war', 'harry potter'],
                correct:'God of war',
                level:'hard'
            },
            {
                question:'What game was a battle royal?',
                answers:['apex legends', 'titanfall'],
                correct:'apex legends',
                level:'medium'
            },
            {
                question:'What was the best callofduty?',
                answers:['mw2', 'blackops2'],
                correct:'blackops2',
                level:'easy'
            },
        ],
    },
    {
        genre:'HOW MANY',
        questions:[
            {
                question:'How many Players are in a videogame team?',
                answers:['7', '6'],
                correct:'6',
                level:'easy'
            },
            {
                question:'how many games were made iin 2000?',
                answers:['1000', '3000'],
                correct:'3000',
                level:'medium'
            },
            {
                question:'How many people worked on zelda?',
                answers:['1000', '100000'],
                correct:'1000',
                level:'hard'
            },
        ],
    },
]




let score=0

function addCategory(category){
    const column=document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle=document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML=category.genre
    column.appendChild(genreTitle)
    game.append(column)


    category.questions.forEach(question=>{
        const card=document.createElement('div')
        card.classList.add('card')
        column.append(card)


        if (question.level=='easy'){
            card.innerHTML=100
        }
        if (question.level=='medium'){
            card.innerHTML=200
        }
        if (question.level=='hard'){
            card.innerHTML=300
        }

        card.setAttribute('data-question',question.question)
        card.setAttribute('data-answer-1',question.answers[0])
        card.setAttribute('data-answer-2',question.answers[1])
        card.setAttribute('data-correct',question.correct)
        card.setAttribute('data-value',card.getInnerHTML())


        card.addEventListener('click',flipcard)


    })


}

jeopardycategories.forEach(category=> addCategory(category))

function flipcard(){
    this.innerHTML=""
    this.style.fontSize="15px"
    this.style.lineHeight="12px"
    const textDisplay=document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML=this.getAttribute('data-question')
    const firstbutton=document.createElement('button')
    const secondbutton=document.createElement('button')

    firstbutton.classList.add('first-button')
    secondbutton.classList.add('second-button')
    firstbutton.innerHTML=this.getAttribute('data-answer-1')
    secondbutton.innerHTML=this.getAttribute('data-answer-2')
    firstbutton.addEventListener('click',getResult)
    secondbutton.addEventListener('click',getResult)

    this.append(textDisplay,firstbutton,secondbutton)

    const allCards=Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card=>card.removeEventListener('click',flipcard))
}

function getResult(){
    const allCards=Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card=>card.addEventListener('click',flipcard))
    const cardOfButton=this.parentElement
    if(cardOfButton.getAttribute('data-correct')==this.innerHTML){
        score=score+parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML=score
        cardOfButton.classList.add('correct-answer')
        setTimeout(()=>{
            while(cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML=cardOfButton.getAttribute('data-value')
        },100)
    }
    else{
        cardOfButton.classList.add('wrong-answer')
        setTimeout(()=>{
            while(cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML=0
        },100)
    }

    cardOfButton.removeEventListener('click',flipcard)

}