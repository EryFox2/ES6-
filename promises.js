//used in network requests like API's or will working with async functions
// Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );


/*
 **Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


const userData = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            let person = {
                firstName: "Erica",
                lastName: "Gelly",
                email: "ericayngelly@gmail.com"
            }
            const { firstName, lastName, email } = person;
            if( error ) {
                reject("500 Level Error")
            } else {
                resolve(`${firstName} ${lastName}'s email address is ${email}.`);
            }
        }, 3000)
    })
}

userData()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );