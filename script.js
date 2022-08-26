// values
let player = {
    name: "Kuzan",
    chips: 205
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": $" + player.chips

// Random card function
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    
}

// start function
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard

    renderGame()
}
// blackjack finction
function renderGame() {
    cardEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEL.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEL.textContent = message
}

// newcard function
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let Card = getRandomCard()
    sum += Card
    cards.push(Card)
    renderGame()
    }
}



