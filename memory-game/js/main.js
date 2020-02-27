let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
if (cardsInPlay.length === 2) {
	} else if (cardOne === cardTwo){
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
console.log(cardOne);
console.log(cardTwo);
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);