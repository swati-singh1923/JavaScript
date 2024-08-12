//Declare a function fullName and it print out your full name.

function fullName(){
    let name = "Chhaya Gupta";
    console.log(name);  //OR
    console.log("Swati Singh");
}

fullName();

/*Declare a function fullName and now it takes firstName, lastName as a parameter and it 
returns your full - name. */

function fullName(firstName, lastName){
    return firstName + lastName;
}

let name = fullName("swati", " Singh");
console.log(name);

/*An area of a rectangle is calculated as follows: area = length x width. Write a function which 
calculates areaOfRectangle. */ 

function areaOfRectangle(length, width){
    let area = length * width;
    return area;
}

console.log(areaOfRectangle(35,15));

/*A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a 
function which calculates perimeterOfRectangle.*/ 

function perimeterOfRectangle(length, width){
    return 2*(length + width);
}

console.log(perimeterOfRectangle(24, 5));

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r){
    let pi = 3.14;
    let area = pi * r * r;
    return area;
}

console.log(areaOfCircle(8));

/*Speed is calculated by dividing the total distance covered by a moving object divided by the total
amount of time taken. Write a function which calculates a speed of a moving object, speed.*/ 

function calculateSpeed(distance, time){
    let speed = distance/time;
    console.log(speed);
}

calculateSpeed(140, 3);
