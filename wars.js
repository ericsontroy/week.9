//Coding Steps: Week 9 War game//
//For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
//You do not need to do anything special when there is a tie in a round.
//Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
//You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.
//The completed project should, when executed, do the following:
//Deal 26 Cards to each Player from a Deck of 52 cards.
//Iterate through the turns where each Player plays a Card.
//The Player who played the higher card is awarded a point.
//Ties result in zero points for both Players.
//After all cards have been played, display the score and declare the winner.
//The following is extra credit (10pts)
//Write a Unit Test using Mocha and Chai for at least one of the functions you write.

//started with the suggested classes given in the instructions and when researching I found some good properties to give each class to help my brain into thinking and labeling more consistently//

//completed a card class
class Card {
  constructor(ranks, suits, values) {
    this.ranks = ranks;
    this.suits = suits;
    this.values = values;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  createDeck() {
    let ranks = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    let suits = ["♣", "♠", "♦", "♥"];

    let values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
      for (let c = 0; c < ranks.length; c++) {
        this.cards.push(new Card(suits[i], ranks[c], values[c])); // this was awesome to learn about multiple varibles usage in loops and how to get your results.
      }
    }
  }
  shuffleDeck() {
    let deck1, deck2, temporaryDeck;
    for (let i = 0; i < 3000; i++) {
      deck1 = Math.floor(Math.random() * this.cards.length); // I orginally was going to use math.ceil and some of the values would not show up.
      deck2 = Math.floor(Math.random() * this.cards.length);
      temporaryDeck = this.cards[deck1];
      this.cards[deck1] = this.cards[deck2];
      this.cards[deck2] = temporaryDeck;
    }
  }
}

class Player {
  constructor(name) {
    this.playersName = name;
    this.playersCards = [];
    this.playersScore = 0;
  }

  get point() {
    return this.playersScore;
  }
}
class Game {
  constructor() {
    this.players = [];
  }
  // This was one of the toughest challenges for me in the coding process i had to search many examples to make it work.
  start(player1, player2) {
    this.players.push(new Player(player1));
    this.players.push(new Player(player2));
    let nd = new Deck();
    nd.createDeck();
    nd.shuffleDeck();
    this.players[0].playersCards = nd.cards.slice(0, 26);
    this.players[1].playersCards = nd.cards.slice(26, 52);
    // Need to do a scoreKeeper funtion
    for (let i = 0; i < this.players[0].playersCards.length; i++) {
      if (
        this.players[0].playersCards[i].values >
        this.players[1].playersCards[i].values
      ) {
        this.players[0].point + 1;
        console.log("Point Troy- WOW! WE DID it"); // Had to use console to find my bearings after to start mapping the point keeping
      } else if (
        this.players[0].playersCards[i].values ===
        this.players[1].playersCards[i].values
      ) {
        console.log(" TIe- Tie- Tie");
      } else {
        this.players[1].point + 1;
        console.log("Point AllyssA");
      }
    }
    if (this.players[0].point > this.players[1].point) {
      console.log("Troy WON!!!");
    } else if (this.players[0].point < this.players[1].point) {
      console.log("Allyssa always wins");
    } else {
      console.log("Broken");
    }
  }
}

let warGame = new Game();
warGame.start("Troy", "Allyssa");

console.log(warGame.players);
