//Do an async task
//DB calls, cryptography, network calls
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Promise consumed 2");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Hitesh", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "hitesh", passwprd: "1234"})
        } else {
            reject("Error: Somthing went wrong")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username); 
})
.catch((error) => {
    console.log(error);   
})
.finally(() => { console.log("The promise is either resolved or rejected") });


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "javascript", passwprd: "1234"})
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

consumePromiseFive();