//Destructuring Objects
const player = {
    name1: 'Erica Gelly',
    school: 'University of Ghana',
    address: {
        city: 'Lashibi'
    }
}
const { name1, school, address: {city} } = player;
console.log(`${name1} schools at ${school}`);

//challenge
const student = {
    name2: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}
const { name2, age, projects: {diceGame} } = student;
console.log(`${name2} is ${age} years old and is working on a ${diceGame}`);


//Destructuring Arrays
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];
lastName = 'Clements';
console.log(`${lastName} ${firstName}`)

//Object Literals
function addressMaker1(city1, state1) {
    const newAdress1 = {city1, state1};
    
    console.log(newAdress1);
}

addressMaker1('Austin', 'Texas');

//Challenge 
function addressMaker(address) {
    const { city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    
    console.log(`${newAddress.city} lives in ${newAddress.state} in ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});