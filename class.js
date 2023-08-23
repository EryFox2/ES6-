import { Animal, Cat } from './animal.js';

//creating the instance 
let cat = new Animal('Cat', 4);
//can change the value 
cat.legs = 3;
console.log(cat.legs)

//class function call 
cat.makeNoise('Meow');

console.log(cat.metaData)

//Creating an instance of a subclass
let NewCat = new Cat('Cat', 4);
NewCat.makeNoise(); 

/*
**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
*/

import { Player, TennisPlayer } from './Player.js';
let messi = new Player("Messi", "Argentina");
messi.PrintString();

let rafN = new TennisPlayer("Rafael Nadal", "India", 34);
rafN.PrintAnotherString();
