function minNumber(arr){
    if(arr.length === 0) return null;

    let min = arr[0];

    for(let i = 0; i<arr.length; i++){
        if (arr[i]< min){
            min = arr[i];
        }
    }
    return min;
}

array = [1,21,3,123,2,-2];
console.log("Min number: ", minNumber(array));