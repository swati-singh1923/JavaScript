//Function defination(telling js).

function hello(){
    console.log("Hello World!");
}

hello();

//Print numbers from 1 to 5 using function.

function print1to5(){
    console.log("Hello!");
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

print1to5();

//Log to result to the console if person is adult or not.

function isAdult(){
    let age = 14;
    if(age >= 18){
        console.log("Adult");
    }
    else{
        console.log("Not adult.");
    }
}

isAdult();

//Create a function to roll a dice & always display the value of the dice(1 to 6).

function diceRoll(){
    let dice =  Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}

diceRoll();

//Functions with arguments.

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Aman" , 23);     //Aman's age is 23.
printInfo("Karan");        //Kaean's age is undefined.
printInfo(13);             //13's age is undefined.

//Create a function that gives us the average of three numbers.

function averageOf(a, b, c){
    let avg = (a + b + c)/3;
    console.log("Average is", avg);
}

averageOf(2,3,5);
averageOf(1,8,5);

//Create a function that prints the multiplication table of a number.

function printTable(num){
    for(let i=num; i<=num*10; i+=num){
        console.log(i);
    }
}

printTable(5);
printTable(7);

//Return Keyword:Return keyword is used to return some value from the function.

function loggedIn(username){
    // if(!username){
    //     console.log("Please enter your username.");
    //     return
    // }else{
    //     console.log("quit")
    //     return 
    // }
    return `${username} just logged in.`
}

console.log(loggedIn("Swati"));
console.log(loggedIn());          //undefined just logged in.


function isAdult(age){
    if(age>=18){
        return "Adult"
    }
    else{
        return "Not Adult."
    }

    console.log("you can vote.");  //Not reachable code 
}

console.log(isAdult(15));

//When js reaches a "return" statement, the function will stop executing.

//Calculate shopping cart value.

function calculateCart(num1){
    return num1
}

console.log(calculateCart(200,376,8));  //200

function calculateCartPrice(...num1){   // (...)Rest Operator
    
    return num1
}

console.log(calculateCartPrice(200,376,8));  


//Create a function that returns the sum of numbers from 1 to n.

function returnSumOf(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum
}

console.log(returnSumOf(10));

//Function with array

let array = ["hiii", "hello", "hey", "bye"];

function myArray(getArray){
    return getArray[1]
}

console.log(myArray(array))
console.log(myArray(array[1]))

//Pass the array in function

function myNewArray(getArray){
    return getArray[2]
}

console.log(myNewArray([400, 500, 120, 200]));

//Function with Objects.

let myObject = {
    user : "Sam",
    price : 400
};

function handleObject(getObject){

    return `Username is ${getObject.user}, and price is ${getObject.price}.`
}

console.log(handleObject(myObject));

console.log(handleObject({
    user : "Jhon",
    price : 500
}));

//Create a function that returns the concatenation of all strings in an array.

let string = [200, 300, 500, 120, 320];

function concatenationOfString(concatString){
    let result = " ";
    let sum = 0;
    for(let i=0; i<string.length; i++){
        result +=string[i];
        //sum = sum + string[i];
        //result = sum;
    }
    return result;
}

console.log(string);
console.log(concatenationOfString(string));

//Scope: Scope determines the accessibility of variables objects and functions from different parts of the code.



function calSum(a,b){

    let sum = a+b
    return sum            //Function scope

}

console.log(calSum(2,4));
//console.log(sum);     //error sum is not defined

for(let i=1; i<=5; i++){
    console.log(i);       //Block Scope
}

//console.log(i);       //Not accessible from outside of block

function outerFun(){
    let username = "Sam";
    //console.log(website);   //error website is not defined
   
    function innerFun(){
        let website = "Youtube";
        console.log("Username is",username);
        console.log("Website is",website);
    }
     
    //console.log(website);   //error website is not defined
    innerFun();
    
}

outerFun();


//Function Expression

console.log(addOne(6));

function addOne(num){
    return num + 1
}

//addOne(6);

//addTwo(8);  //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

addTwo(7);












