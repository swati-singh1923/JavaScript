//forEach() function
//arr.forEach(some function definition or name);

let arr = [1,2,3,4,5,6,7,8,9];

let print = arr.forEach(element => {
    console.log(element);
});  //OR

arr.forEach(function(element) {
    console.log(element);
    
});   //OR

arr.forEach((element) => {
    console.log(element);
});

//Array of Objects 

let student = [
    {
        name : "Aman",
        marks : 95,
        id : 101
    },
    {
        name : "Shradha",
        marks : 94.4,
        id : 102
    },
    {
        name : "Karan",
        marks : 94,
        id : 103
    },
];

student.forEach((std) => {
    console.log(`Student name is ${std.name} and id is ${std.id}.`);
    
});

//Map function/method

//let newArr = arr.map(Some function definition or name);

let num = [2,3,4,5,6,1,7,8];

let double = num.map((d) => {
    return d * 2;
});
console.log(double);

//Or
num.map(function(d) {
    console.log(d * 2);
});

// leaving function empty

let empty = num.map(function(element) {});
console.log(empty);    //array of undefined values

let gpa = student.map(function(element) {
    return element.marks/10;
});

console.log(gpa);

//filter()

//let newArr = arr.filter(some function definition or name)

let odd = arr.filter((num) => {
    return !(num % 2 == 0);
});
console.log("Odd numbers of Array:",odd);

let even = arr.filter((num) => (num % 2 == 0));
console.log("Even numbers of Array:",even);

//Reduce() :Reduces the array to a single value

let sumOfArr = arr.reduce((acc, curr) => {
   return acc + curr;
});
console.log("Sum is",sumOfArr);

//Find maximum of an array

let array = [21, 34, 12, 5, 31, 45, 12, 1];

//using traditional loop
 let max = -1;
 for(let i=0; i<array.length; i++){
    if(max < array[i]){
        max = array[i];
    }
 }

 console.log("Maximum no is:", max);
 
 //Using reduce method
 let ans = array.reduce(function(max, el) {
    if(max > el){
        return max;
    }
    else{
        return el;
    }
 });

 console.log("Max is:",ans);

 //find minimum of an array

 let result = array.reduce((min , el) => {
    if(min < el){
        return min;
    }
    else{
        return el;
    }
 });

 console.log("minimum is:",result);
 
//Every: Returns true if every element of an array gives true for some function. else retuns false

//Check if every element of array is even or not
let array1 = [2, 4, 6, 8];
let isEven = array1.every((element) => ( element%2 == 0 ));
console.log(isEven);         //true

//Check if every element of array is odd or not.

let array2 = [1,2,3,4,5,6,7];
let isOdd = array2.every((element) => !( element%2 == 0 ));
console.log(isOdd);          //false

//Some:Returns true if some element of array gives true for some function, else returns false.

let Even = array1.some((element) => ( element%2 == 0 ));
console.log(Even);          //true

let Odd = array2.some((element) => !( element%2 == 0 ));
console.log(Odd);           //true

//Check if all numbers in our array are multiplies of 10 or not .

let nums = [10, 20, 30, 40, 50];
let multiplies = nums.every(function(num) {
    return num % 10 == 0;
});

console.log(multiplies);
