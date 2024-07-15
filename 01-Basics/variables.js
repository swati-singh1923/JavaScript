console.log("Swati");

const accountId = 1234;
let accountEmail = "swati@gmail.com";
var accountPassword = "987654";

//Don't use this type of method for variable decleration. 
accountCity = "Prayagraj";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

//Console log in tabular form.
console.table([accountId, accountEmail, accountPassword, accountCity]);

//Changing values of variables.

//accountId = 456; // Not allowed.
//console.log(accountId);

accountEmail = "singh@gmail.com";
accountPassword = "212134";
accountCity = "Delhi";

console.table ([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/

let accountState ;
console.log(accountState); // The output will be undefined.