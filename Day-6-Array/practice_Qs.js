/* Qs1.Write a JavaScript program to get the first n elements of an array.
[n can be any positive number]. */

let array = [2,4,5,0,-2]
let n = 3;
let ans = array.slice(0,n);
console.log("First n elements:",ans);

/* Qs2.Write a JavaScript program to get the last n elements of an array.
[n can be any positive number]. */

ans = array.slice(array.length-3);
console.log("Last n elements:",ans);

//Qs3.Write a JavaScript program to check whether a string is blank or not.

let str = "hello world!";
//console.log("Length of string is:",str.length);

if(str.length === 0){
    console.log("String is blank/empty.");
}
else{
    console.log("String is not empty.");
}

/* Qs4.Write a JavaScript program to test whether the character at the given(character) index 
is lowercase.*/

let char = "helloworld!";
let idx = 4;
if(char[idx] === char[idx].toLowerCase()){
    console.log("Character is in lowercase.");
}
else{
    console.log("Character is not in lowercase.")
}

// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.

let newStr = "   hello world!  ";
console.log(`Original string:${newStr}`);
console.log(`Trimed string: ${newStr.trim()}`);

// Qs6.Write a JavaScript program to check if an element exists in an array or not.

let newArr = [43, 4, 6, 12, 45, 78];
//let num = 23;
//console.log(newArr.indexOf(num));   //-1 (not found)
let num = 45;
if(newArr.indexOf(num) != -1){
    console.log("Exist");
}
else{
    console.log("Not exist.");
}