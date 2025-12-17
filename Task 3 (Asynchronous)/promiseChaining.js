// function Async1(){


//     return new Promise(
//         (resolve, reject) => {
//         setTimeout(() => {console.log("Some Data1");}, 1000);
//         console.log("Successfull");
//         resolve("Data fetched successfully");
//     }
//     );


// }

// function Async2(){


//     return new Promise(
//         (resolve, reject) => {
//         setTimeout(() => {console.log("Some Data2");}, 6000);
//         console.log("Successfull");
//         resolve("Data fetched successfully");
//     }
//     );


// }

// console.log("Fetching1...");

// let p1 = Async1();
// p1.then((result) => {
//     console.log(result);
// });

// console.log("Fetching2...");

// let p2 = Async2();
// p1.then((result) => {
//     console.log(result);
// });



// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

//callBack Hell
// getData(1, () => {
//     console.log("Calling Data 2...");
//     getData(2, () => {
//         console.log("Calling Data 3...");
//         getData(3, () => {
//             console.log("Calling Data 4...");
//             getData(4);
//         });
//     });
// });


//promis Chaining:

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
// });


// Returning Promises:

// 1. Normal Value
let pv = new Promise(function(resolve, reject) {
  resolve(10);
});

p.then((value) => {
  console.log("1st then:", value);
  return value * 2;     // returning 20
})
.then((value) => {
  console.log("2nd then:", value);
});


// 2. Returning Promise

let p = Promise.resolve(5);

p.then((value) => {
  console.log("1st then:", value);
  return new Promise((resolve) => {
    setTimeout(() => resolve(value + 5), 1000);
  });
})
.then((value) => {
  console.log("2nd then:", value);
});



