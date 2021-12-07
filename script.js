//arrays to represent the faces and suits
const Faces = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
const Suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

/* Card object
This takes an id to represent the card value
It is done the old style way of function*/
function Card(id) {
  this.id = id;
  this.getSuit = function () {
    return Suits[Math.floor(this.id / 13)];
  };
  this.getFace = function () {
    return Faces[this.id % 13];
  };
  this.getCard = function () {
    return Faces[this.id % 13] + " of " + Suits[Math.floor(this.id / 13)];
  };
}//end of Card class

/*
Deck class
Uses the new style for OOP.
*/
class Deck {
  //Variables
  #deck;//# indicates private
  #currentCardLocation;
  //constructor - creates the instance
  constructor() {
    this.#currentCardLocation = 0;
    this.#deck = [];
    //create the cards in the deck
    for (var i = 0; i < 52; i++) {
      this.#deck.push(new Card(i));
    }
  }//end constructor

  //shuffle method
  shuffle() {
    //loop through the deck
    for (var i = 0; i < this.#deck.length; i++) {
      //change the chard at the loop location with a random card in the deck
      var tempLocation = Math.floor(Math.random() * 52);
      var tempValue = this.#deck[tempLocation];
      this.#deck[tempLocation] = this.#deck[i];
      this.#deck[i] = tempValue;
    }
    console.log("in shuffle");//for debugging
  }

  //public method to show the deck
  showDeck() {
    var output = "";
    for (var i = 0; i < this.#deck.length; i++) {
      output += this.#deck[i].getCard() + "\n";
    }
    return output;
  }

  //public method to deal a card
  dealCard() {
    this.#currentCardLocation++;
    return this.#deck[this.#currentCardLocation - 1].getCard();
  }
}//end of Deck class

//create your deck
const deck = new Deck();

//Code to deal a card:
/*console.log("Deal a card: " + deck.dealCard());
console.log("Deal another card: " + deck.dealCard());
*/

//code to demonstrate how shuffle actually shuffles the deck
console.log(deck.showDeck());
console.log(deck.shuffle());
console.log(deck.showDeck());

// Code to demo how to create a card
/*const card1 = new Card(0);
console.log(card1.getCard());
console.log(card1.getSuit());
const card2 = new Card(1);
console.log(card2.getCard());
*/

