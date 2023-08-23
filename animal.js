export class Animal {

    //Build instance of a class with a constructor
    //You can then create an instance of a class later 
    constructor(type, legs) {
        //initializing properties
        this.type = type;
        this.legs = legs;
    }

    //create a function in a class that can take parameters 
    //And is called the same way 
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    //Don't need to be instanciated, remains the same 
    //could be used for instances too 
    static return10() {
        return 10;
    }

    //Get methods
    //Binds an object's property to a function and in this case an instance of a class 
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}

//inheritance for subclasses
export class Cat extends Animal {
    //Overwrite a fuction
    makeNoise(sound = "meow") {
        console.log(sound);
    }

    //inheritance of class for all or some properties
    constructor(type, legs, tail) {
        super(type, legs);
        //can add extra properties
        this.tail = tail;
    }
}