//To make copy of array and object

//Make a copy of array
let contacts = ["Mary", "Joel", "Danny"];

let friends = [ ...contacts ];
//Add other elements 
let personalFriends = [ "David", ...contacts, "Lilly" ];

contacts.push("John");

console.log(personalFriends);

//Make a copy of object
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}
console.log(employee);

//Make a copy of an array filled with objects
let students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

let something = [
    { name: "Kate", city: "Sidney" },
    ...students,
    { name: "John", city: "New York" }
]
console.log(something)


//Challenge
/*
  
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [ ...shoppingList, "banana", "baking powder", "laxatives"];

console.log(shoppingBasket)