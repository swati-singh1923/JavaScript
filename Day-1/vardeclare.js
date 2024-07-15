/* Task:1 Declare a variable using var, assign it a number, 
   and log the value to the console.*/ 

   var number = 1234;
   console.log(number);

/* Task:2 Declare a variable using let, assign it a string, 
   and log the value to the console.*/ 

   let str = "Swati Singh";
   console.log(str);

/* Task:3 Declare a variable using const, assign it a boolean value, 
   and log the value to the console. 
*/ 

   const isLogIn = 1;
   const isLoggedIn = Boolean(isLogIn)
   console.log(isLoggedIn);

   const isAdult = true;
   //const isNotAdutl = false;

/* Task 5:  Declare a variable using let, assign it an initial valve, 
   reassign a new value and log the both values to the console. 
*/

   let name = "swati singh"
   console.log(name);

   name = "sanjay"
   console.log(name);

/* Task 4: Create Variable of different data types 
   (numbers, boolean, string, object, array) 
   and log each variables type of using the type of operator.
*/ 

// This is number data type.

   let num = 987654; 
   console.log(num);
   console.log(typeof num);

// This is string data type.

   let str1 = "Hello!" 
   console.log(str1);
   console.log(typeof str1);

// Boolean data type.

   let loggedIn = true; 
   console.log(loggedIn);
   console.log(typeof loggedIn);

// Array data type.

   let array = ["hello", "hii", "hey"] 
   console.log(array);
   console.log(typeof array);

// Object data type.

   const myId = { 
    name : "swati",
    age : 25
   }
   
   console.log(myId);
   console.log(typeof myId);

/* Task 6: Trying the reassigning a variable declare with const
   and observe the error. */ 

   const year = 2024;
   year = 2025;
   console.log(year); // Error , Assignment to constant variable

/* Values of const can't be changed with re-assignment & they
   can notbe re-declared. */ 

   
