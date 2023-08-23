// checks if a value is included in an array
let numArray = [1,2,3,4,5];

//the indexof method returns a -1 for values that arent included in an array 
console.log(numArray.indexOf(0));

//so the includes method lowkey solves that problem
//not supported by internet explorer
console.log(numArray.includes(0));

//challenge
/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter"];

if(listIngredients.includes("chocolate")){
    console.log("We are going to make a chocolate cake");
}else{
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}
