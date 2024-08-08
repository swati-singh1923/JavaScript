//Iterate the value of an array.

let fruits = ["banana", "apple", "orange", "gvava", "grapes"];
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
    
}

//Push a new element in array and log the value to the console.

fruits.push("pineapple");
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

console.log(`New array ${fruits}`);

//Log the value of an array in reverse order.

for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
    
}

//Print even and odd element of an array.

for(let i=1; i<fruits.length; i=i+2){
    console.log("Odd array",i, fruits[i]);
}

for(let i=0; i<fruits.length; i=i+2){
    console.log("Even array",i, fruits[i]);
}

//Loops with Nested Arrays

let heros = [["ironman", "spiderman", "thor","dr. strange"], ["wonder women", "superman", "flash"]];
for(let i=0; i<heros.length; i++){
    console.log(`Lists of: ${i+1}`)
    for(let j=0; j<heros[i].length; j++)
        console.log("J =",j, heros[i][j]);
}

//For of loop: Used for access to collections of items.

let colors = ["red", "yellow", "green", "black", "white", "blue"];
for(let color of colors){
    console.log(color);
}

//For of loop for string

let char = "Hello World!"
for(let chars of char){
    console.log(chars);
}

//Nested for of loop

for(list of heros){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}

