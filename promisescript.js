// creates the promise method. promise is resolved when timer reaches more than 6s
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved")
    },6000)})

//console loge before calling the promise 
console.log("Before calling promise");

//call the promise and wait for it to be resolved, then print a message
myPromise.then((successMessage) => {
    console.log("from callback " + successMessage)
})

//console log after calling the promise 
console.log("after calling the promise");

//two promises
// first promise resolved after 6s
let thisPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("the promise is resolved")
    },6000)
})

//second promise resolved after 3s
let nextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("the promise is resolved")
    },6000)
})

//call first promise 
thisPromise.then((successMessage) => {
    console.log("callback: " + successMessage);
})

//call second promise 
nextPromise.then((successMessage) => {
    console.log("callback: " + successMessage);
})


    
