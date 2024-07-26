// Conditional (Ternary) operator.

/* Task 1: Write a program that uses ternary operator to check if a 
   number is even or odd and log the result to the console. */
   
   let num = 6;
   let check = (num % 2 === 0)? "Even" : "Odd";
   console.log(num, "is a ",check, "number.");

/* Task 2: Write a program to check if a year is a leap year using multiple
   condition (divisible by 4 but not 100 unless divisible by 400) and log the
   result to the console*/  
   
   let year = 2025;

   if(year % 4 === 0){
    console.log("Leap year", year);
   }

   else if(year % 400 === 0){
    console.log(year, "is a leap year");
   }

   else{
    console.log(year, "is not a leap year");
   }


