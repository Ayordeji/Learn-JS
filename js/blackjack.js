// let age = Math.floor(Math.random() *200);
// console.log(age);

// if (age < 100) {
//   console.log("Not elegible");
// }
// else if (age === 100) {
//   console.log("Elegible");
// }
// else { 
//     console.log("Not elegible, you have already gotten one");
// }


// if (age < 21) {
//   console.log("You can't enter the club!");
// }
// else {
//   console.log("You are Welcome!");
// }   

// let firstCard = Math.floor(Math.random() * 25);
// let secondCard = Math.floor(Math.random() * 25);
let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard];    // array of cards
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isalive = true;
message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector('.sum_el');
let cardEl = document.querySelector('.card_el'); 


/*---Generate random numbers between 1 and 13-------*/
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  }
  else {
    return randomNumber;
  }
}

/*-------------------Render Game--------------------*/
function renderGame() { 
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

if (sum <= 20) {
  message = "Do you want to draw a new card?";
}

else if (sum === 21) {
  message = "Wohoo! You've got a Blackjack";
    hasBlackjack = true;  
}
else {
  message = "Bummer! You've busted";
    isalive = false;
}

messageEl.textContent = message;

} 


/*-------------------Start Game--------------------*/
function startGame() {
    renderGame();
 
}


/*-------------------New Game--------------------*/
function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    console.log(cards)

}

