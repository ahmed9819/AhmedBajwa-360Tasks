// // sum through variables

// let a = 5;
// let b = 10;

// let sum = a + b;

// console.log("Sum =", sum);


// // sum by taking input from user
// const prompt = require("prompt-sync")();
// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));

// let sum1 = num1 + num2;

// console.log("Sum =", sum1);

// sum through array 

// let number = [10,1,23,12];
// sum2 = 0;
// for(let i=0; i<number.length; i++){
//     sum2 = number[i]+sum2;
// }

// console.log("Sum = ", sum2)

// sum through function

function sum(arr){
    let sum3 = 0;
    for (let i = 0; i<arr.length;i++){
        sum3 = sum3 + arr[i];
    }
    return console.log("sum = ",sum3);
}

let array = [10,102,23];
console.log(sum(array));