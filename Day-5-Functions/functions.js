//Activity 1: Function Decleration

//Write a function to check if a number is even or odd and log the result to the console.

function toCheckEvenOrOdd(){
    let num = 6;
    if(num%2 == 0){
        console.log(num,"is even number.");
    }
    else if(!(num%2 == 0)){
        console.log(num,"is odd number.");
    }
    else{
        console.log("Not a number.");
    }
}

toCheckEvenOrOdd();

//Write a function to claculate the square of a number and return the result.

function calculateSqr(num){
    return num**2;
}

let result = calculateSqr(5);
console.log(`Square is: ${result} `);

/*Create a function using the function keyword that takes a string as an argument & returns the 
numbers of vowels in the string. */

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello! I am Sam"));

//Activity 2: Function Expression

//Write a function expression to find the maximum of two numbers and log the result to the console.

const maxOfTwo = function(a, b){
    if(a>b){
        console.log(`a is greater = ${a}`);
    }
    else{
        console.log(`b is greater = ${b}`);

    }
}

maxOfTwo(9,3);

//Write a function expression to find the maximum of two numbers and log the result to the console.

const maxOfThree = function(a,b,c){
    if(a>b){
        if(a>c){
            console.log("a is greater =",a);
        }
    }
    else if(b>c){
        console.log("b is greater =",b);
    }
    else{
        console.log("c is greater =",a);
        
    }
}

maxOfThree(6,10,2);

//Write a function expression to concatnate two strings and return the result.

const concatString = function(str1, str2){
    return str1 + str2;
}

let concat = concatString("Hello", " World!");
console.log(concat);

//Activity 3: Arrow Function

//Write an arrow function to calculate sum of two numbers and return the result.

const sumOfTwo = (a, b) =>{
    return a+b;
}

let ans = sumOfTwo(7,3);
console.log("Sum is =",ans);
console.log("Sum is =",sumOfTwo(8,7));

//Write an arrow function to check if a string contains specific character and retuns the boolean result.

const charOfStr = (str) => {
    let char = 'a'
    return str.includes('e');
}

console.log(charOfStr("apna college"));

//Activity 4: Function Parameters and Default values.

/*Write a function that takes two parameters and returns their product and provides a default 
value to second parameter. */

const takingParameter = function(prod1, prod2 = "Laptop"){
    return `Product one is ${prod1}, and product two is ${prod2}.`
}

console.log(takingParameter("Android", "iphone"));
console.log(takingParameter("Android"));

/*Write a function that takes person's name and age and returns a greeting message.provide a 
default value to age. */

function personInfo(name, age = 23){
    return `Namaste! ${name}'s age is ${age}.`
}

console.log(personInfo("Sam", 25));
console.log(personInfo("Sam"));

//Higher order function

/*Write a higher-order function that takes a function and a number, and call the function at 
many times. */

function higherOrder(func, num){
    for(let i=1; i<=num; i++){
        func();
    }
}

let greet = function(str){
    console.log("Namaste!");
}

higherOrder(greet, 3);

/*Write a higher-order function that takes two functions and one value, applise the first function
 to the value and then applies the second function to result. */