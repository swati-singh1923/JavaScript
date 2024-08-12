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