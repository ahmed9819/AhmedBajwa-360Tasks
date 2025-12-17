// find maximum number in an array

function maximumNumber(arr){
    if(arr.length === 0) return null;
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}

const prompt = require("prompt-sync")();
let arr1 = [];
size = parseInt(prompt("Enter size of array: "));
for(let i=0;i<size;i++){
    element = parseInt(prompt("Enter element: "));
    arr1[i] = element;
}


console.log("Max number: ",maximumNumber(arr1)); 
