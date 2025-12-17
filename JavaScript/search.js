function seacrh(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

let array = [10,20,30,40,50];
console.log(seacrh(array, 30));