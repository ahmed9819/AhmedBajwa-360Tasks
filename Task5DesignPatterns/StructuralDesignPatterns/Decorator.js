function withLogging(fn){
    return function(...args){
        console.log("Function called");
        return fn(...args);
    };
}

function saveData(){
    console.log("Data Saved");
}

const loggedSave = withLogging(saveData);
logged