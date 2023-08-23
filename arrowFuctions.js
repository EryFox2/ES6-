//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//Arrow Fuction
const dinnerMenu = (food) => {
    return `I'm going to eat a ${food} for dinner`;
}

console.log( dinnerMenu("chicken salad") );

//Shorter version - For a function with one return value
const dessertMenu = food => `I'm going to have ${food} for dessert`;

console.log( dessertMenu('ice-cream') );

////Shorter version - For a function with one return value and one parameter
const apetizerMenu = food => `I'm going to have ${food} as an apetizer`;

console.log( apetizerMenu('bread stick') );