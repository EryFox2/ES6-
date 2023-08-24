//Specific kind of array that ignores duplicates
//A set is iterable so you can use things like foreach, forof and other iteration methods on it 
const exampleSet = new Set([1,1,1,1,2,2,2,2]);
console.log(exampleSet.size);//prints 2

//you can add new values
exampleSet.add(5);
console.log(exampleSet.size); //prints 3

//You can chain the add method
exampleSet.add(5).add(17);
console.log(exampleSet.size);//prints 4

//You can delete a value 
exampleSet.delete(5)
console.log(exampleSet.size);//prints 3

//the delete method returns a boolen value-stating whether the delete was successful or not
console.log(exampleSet.delete(17));//prints true

//check if the set has a value ... returns a boolean value
console.log(exampleSet.has(2));//prints true

//remove all values from the set
exampleSet.clear();
console.log(exampleSet.size);//print 0