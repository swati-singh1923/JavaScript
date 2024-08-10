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



