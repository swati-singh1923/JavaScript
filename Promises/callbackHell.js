//Callback Hell
function savedDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success()
    }else{
        failure();
    }
}
savedDb("Apna College!",
    //sucess callback1
    () => {
        console.log("Success1: Your data was saved");
        savedDb("Hello World",
            //sucess callback2
            () => {
                console.log("Success2: Your data saved");
                savedDb("Shradha",
                    //sucess callback3
                    () => {
                        console.log("Success3: data saved");
                    },
                    //failure callback3
                    () => {
                        console.log("Failure3: weak connection");
                    }
                )
            },
            //failure callback2
            () => {
                console.log("Failure2: Weak connection");
            }
        )
    },
    //failure callback1
    () => {
        console.log("Failure: Weak connection your data was not saved");
    }
);

//Promises 
const savetoDb = function(data){
    return new Promise((resolve, reject) => {
        let speed = Math.floor(Math.random() * 10 ) + 1;
        if(speed > 4){
            resolve("Sucess: Data was saved");
        }else {
            reject("Failure: Weak connection");
        }
    })
}

savetoDb("Hello")
.then((result) => {
    console.log("Promise completed");
    console.log("Result is,", result);
    return savetoDb("Hello World");
})
.then((result) => {
    console.log("Promise2 completed");
    console.log("Result is,", result);
})
.catch((error) => {
    console.log("Promise is not completed");
    console.log("Error is,", error);
})