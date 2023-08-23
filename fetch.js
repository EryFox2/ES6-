/**
 * RESTFul API - https://jsonplaceholder.typicode.com/ really useful in learning or teaching API
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

//Dealing with API calls without using jquery 

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

//Post or Get call
//Works like fetch but can also be used to pass in some objects
fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylansemail310@gmail.com',
            body: 'That was dope!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))

/**Challenge
 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  */

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Erica',
            email: 'erykahfox25@gmail.com',
            body: 'Saa mmom!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
