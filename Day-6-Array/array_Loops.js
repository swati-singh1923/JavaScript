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