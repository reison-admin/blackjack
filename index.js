let firstCard = Math.floor(Math.random() * 11+1);
let secondCard = Math.floor(Math.random() * 11+1);
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard+secondCard;
cardString = document.getElementById("cards")
sumString = document.getElementById("sum-el")
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
    let firstCard = Math.floor(Math.random() * 11+1);
    let secondCard = Math.floor(Math.random() * 11+1);
    sum = firstCard+secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } 
    else if (sum === 21) {
        message = "Woohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } 
    else {
    message = "You're out of the game! 😭"
    isAlive = false
    }
    cardString.textContent = "Cards: " + firstCard + " - " + secondCard;
    sumString.textContent = "Sum:" + sum;
    console.log(message)
}
function drawCard() {
    let drawnCard = Math.floor(Math.random() * 11+1);
    sum += drawnCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } 
    else if (sum === 21) {
        message = "Woohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } 
    else {
    message = "You're out of the game! 😭"
    isAlive = false
    }
    cardString.textContent = "Cards: " + firstCard + " - " + secondCard + " - " + drawnCard;
    sumString.textContent = "Sum:" + sum;
    console.log(message)
}

