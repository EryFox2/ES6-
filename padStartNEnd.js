//add value infront of or at the of strings at the specified pad location 
let example1 = 'Dylan';
console.log(example1.padStart(10, 'a'));
console.log(example1.padEnd(10, 'a'));

//when there's no room nothing happens
let example2 = 'Dylan Isreal';
console.log(example2.padStart(10, 'a'));
console.log(example2.padEnd(10, 'a'));

//can be parsed without a character 
let example = 'YouTube.com/CodingTutorials360';
//when the padding is too long it just adds empty spaces and increases the lenght of the string but the string looks the same 
console.log(example.padStart(100));
//when its too short its ignored 
console.log(example.padEnd(1));
