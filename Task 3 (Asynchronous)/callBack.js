//callBack Hell Example:


//CallBack: A function passed as an argument to another function, to be executed after some operation is completed.


//Callback Hell: A situation where multiple nested callbacks make the code hard to read and maintain. forming a pyramid shape


function getData(dataId, getNextData){
    //2s
    setTimeout(() => {
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

//callBack Hell
getData(1, () => {
    console.log("Calling Data 2...");
    getData(2, () => {
        console.log("Calling Data 3...");
        getData(3, () => {
            console.log("Calling Data 4...");
            getData(4);
        });
    });
});



