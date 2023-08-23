//To iterate through iterables

//Iterating through an array
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    //console.log(income);
    total += income;
}
//console.log(total);

//Iterating through strings
let fullName = "Dylan Coding God Israel";


for (const char of fullName) {
    //console.log(char);
}

//Challenge 

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for (let student of students) {
    let {name, city} = student;
    let message = `${name} lives in ${city}`
    console.log(message)
}