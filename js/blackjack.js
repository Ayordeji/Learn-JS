// let firstCard = Math.floor(Math.random() * 12);
// let secondCard = Math.floor(Math.random() * 12);

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


let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isalive = true;
message = "";


let messageEl = document.getElementById("message-el");

function startGame() { 

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

// console.log(message);
messageEl.textContent = message;
console.log(messageEl);
} 


