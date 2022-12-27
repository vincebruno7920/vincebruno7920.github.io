document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'hotdog',
      img: 'img/memory_game/hotdog.png'
    },
    {
      name: 'cheeseburger',
      img: 'img/memory_game/cheeseburger.png'
    },
    {
      name: 'pizza',
      img: 'img/memory_game/pizza.png'
    },
    {
      name: 'ice-cream',
      img: 'img/memory_game/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'img/memory_game/milkshake.png'
    },
    {
      name: 'fries',
      img: 'img/memory_game/fries.png'
    },
    {
      name: 'hotdog',
      img: 'img/memory_game/hotdog.png'
    },
    {
      name: 'cheeseburger',
      img: 'img/memory_game/cheeseburger.png'
    },
    {
      name: 'pizza',
      img: 'img/memory_game/pizza.png'
    },
    {
      name: 'ice-cream',
      img: 'img/memory_game/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'img/memory_game/milkshake.png'
    },
    {
      name: 'fries',
      img: 'img/memory_game/fries.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenIds = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/memory_game/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/memory_game/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/memory_game/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!')
      cards[optionOneId].setAttribute('src', 'img/memory_game/white.png')
      cards[optionTwoId].setAttribute('src', 'img/memory_game/white.png')
      //cards[optionOneId.removeEventListener('clicks', flipCard)]
      //cards[optionTwoId.removeEventListener('clicks', flipCard)]
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/memory_game/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/memory_game/blank.png')
      alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500)
    }
  }

  createBoard()
})
