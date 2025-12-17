// ab iss data ko smjhna hi bht difficult hoga. isiliye hum promises and async await ka use karte h.

//promises: callback hells ko solve krna k liye use hota h. promises is a for "eventual" completion of task. It is an object in JS. 

// ab jesay hum online order krtay hain kisi web sy to promise krti hai k itnay time mein deliver hojayega product. jb wo deliver hojata hai to hum uss promise ko resolve krte hain. agr deliver na ho to hum uss promise ko reject krte hain. same js mein bhi hota hai. jb hum koi asynchronous operation krte hain to wo ya to complete hoga (resolve) ya fail hoga (reject).

//Promise Example:

// let promise = new Promise((resolve, reject) => { 
//     console.log("I'm promise");
//     resolve("Promise resolved successfully");
// });

// let promise1 = new Promise((resolve, reject) => { 
//     console.log("I'm promise");
//     reject("Error: Promise rejected");
// });


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I'm promise");
        //resolve("Success");
        reject("Error: Promise rejected");
    });
}

let promise = getPromise();

promise.then((result) => {
    console.log("Promise resolved");
})
promise.catch((error) => {
    console.log("Promise rejected");
})




