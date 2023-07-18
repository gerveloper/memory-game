document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [
        {
            name: 'burger',
            img: 'src/images/burger.png'
        },
        {
            name: 'coffee',
            img: 'src/images/coffee.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'lollypop',
            img: 'src/images/lollypop.png'
        },
        {
            name: 'orange-juice',
            img: 'src/images/orange-juice.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'burger',
            img: 'src/images/burger.png'
        },
        {
            name: 'coffee',
            img: 'src/images/coffee.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'lollypop',
            img: 'src/images/lollypop.png'
        },
        {
            name: 'orange-juice',
            img: 'src/images/orange-juice.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
    ]
    
    const okAlertsArray = [
        
           '"Mate y café, harina y palmitos..."',   
           '"Yerba, mermeladas, cacao, picadillo..."',
           'Vaaamoooss!!! Canten todooosss!! "Paté y caballa, arroz y arvejas..."',
           '"Sardinas y atún, choclo y lentejas..." Palma, palma, palma!!',
           '"MAROLIOOO LE DA SABOR A TU VIDAAA..."',
           '"MAROLIO ESTÁ DESDE EL COMIENZO DEL DÍAAA!!" BRAVO, BRAVO!!!!!',
        ]
    
    
    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)
    
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []
    
    function createBoard() {
    
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    
    
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
    
        this.setAttribute('src', cardArray[cardId].img)
        
        if (cardsChosenIds.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosenIds)
    }
    
    
    
    
    function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
    
    
        if (optionOneId == optionTwoId) {
            alert('Atención, atención!! Hiciste cloc en la mesma imagen, amiwi')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            
            
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert(okAlertsArray[cardsWon.length])
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            console.log(cardsWon)
        
        } else {
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
    
    
        }
    
    
        cardsChosen = []
        cardsChosenIds = []
    
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = ' Bien, amiwi. GANASTE! Felicitaciones!!!'
        }
    
        console.log(cardsChosen)
        console.log(cardsWon)
    }

    
    createBoard()
    
    })