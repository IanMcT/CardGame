const Faces = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
const Suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

// Constructor function for Person objects
function Card(id) {
  this.id = id;
  this.getSuit = function () {
    return Suits[Math.floor(this.id / 13)];
  };
  this.getCard = function () {
    return Faces[this.id % 13] + " of " + Suits[Math.floor(this.id / 13)];
  };
}


class Deck {
  //Variables
  #deck;//# indicates private
  #currentCardLocation;
  //constructor - creates the instance
  constructor() {
    this.#currentCardLocation = 0;
    this.#deck = [];
    for (var i = 0; i < 52; i++) {
      this.#deck.push(new Card(i));
    }
  }//end constructor
  //shuffle method
  shuffle(){
    for(var i = 0; i < this.#deck.length; i++){
      var tempLocation = Math.floor(Math.random() * 52);
      var tempValue = this.#deck[tempLocation];
      this.#deck[tempLocation] = this.#deck[i];
      this.#deck[i] = tempValue; 
    }
    console.log("in shuffle");
  }
  //public method to show the deck
  showDeck(){
    var output = "";
    for(var i = 0; i < this.#deck.length; i++){
      output += this.#deck[i].getCard()+"\n";
    }
    return output;
  }

  dealCard(){
    this.#currentCardLocation++;
    return this.#deck[this.#currentCardLocation-1].getCard();
  }
}
const deck = new Deck();
/*console.log("Deal a card: " + deck.dealCard());
console.log("Deal another card: " + deck.dealCard());
*/

console.log(deck.showDeck());
console.log(deck.shuffle());
console.log(deck.showDeck());
// Create a Person object
const card1 = new Card(0);
console.log(card1.getCard());
console.log(card1.getSuit());
const card2 = new Card(1);
console.log(card2.getCard());
/*
const card = {
  id: 50,
  set theid(i){
    if(i>51){
      
      this.id = 0;
    }else{
      
    this.id = i;
    }
  },
  get face() {
    return Faces[this.id%13];
  },
  get suit(){
    return Suits[Math.floor(this.id/13)];
  },
  getCard: function() {
    return Faces[this.id%13] + " of " + Suits[Math.floor(this.id/13)];
  }
};

//card.face = "Ace";
console.log(card.face);
card.theid = 60;
console.log(card.face);
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person.firstName + " is " + person.age + " years old.");*/