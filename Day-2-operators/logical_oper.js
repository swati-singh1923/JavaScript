/* Task 1: Write a program that uses the && operator to combine two
   conditions and log the result to the console. */

   let a = 8;
   let b = 3;

   let cond1 = a >= b;
   let cond2 = a == b;

   console.log("cond1 && cond2 =", cond1 && cond2);

   let m = 6;
   let n = 2;

   console.log("if (a >= b) and", a >= b && "(m <= n) =", m <= n);

   console.log("if (a >= b) and ", a >= b && "(m <= n) =", m >= n);

/* Task 2: Write a program that uses the || operator to combine two
   conditions and log the result to the console. */

   let x = 8;
   let y = 3;

   console.log("if (x <= y) and", x <= y || "(x === 3) =", x === 3);

   console.log("if (x >= y) and", x >= y || "(x === 3) =", x === 3);

   console.log("if (x <= y) and", x <= y || "(x >= y) =", x >= y);

/* Task 3: Write a program that uses the ! (not) operator and log the 
   result to the console. */

   let age = 18;
   console.log("is age >= 18 =", !(age >= 18));

// Ternary operator 

/* Task 4: Write a program that uses the ternary operator to check if a number 
   is negative or positive and log the result to the console. */
   
   let marks = 86;
   let result = (marks >40)? "pass" : "fail";
   console.log(result);




