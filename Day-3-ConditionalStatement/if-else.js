/* Task 1: Write a progarm to check if a number is positive, 
   negative or zero and log the ans to console. */ 

   let n = -7;

   if (n > 0){
    console.log("Number is Positive.");
   }
    
   else if (n < 0){
    console.log("Number is Negative.");
   }

   else {
    console.log("Number is Zero.");
   }

/* Task 2: Write a program if a person is eligible for vote (age >= 18)
   or not and log the result to the console. */

   let age = 18;

   if (age >= 18){
    console.log("You are eligible for vote.");
   }

   else{
    console.log("You are not eligible for vote.");
   }

/* Task 3: Create a trafic light system that shows what to do 
   based on color. */   

   let color = "white";

   if (color === "red"){
    console.log("Stop! color is red.");
   }

   else if (color === "yellow"){
    console.log("Slow Down! color is yellow.");
   }

   else if (color === "green"){
    console.log("Go! color is green.");
   }

   else{
    console.log("Trafic light is broken.");
   }

// Nested-if-else Statement

/* Task 3: Write a program to find the largest of three numbers
   and log the result to the console. */
   
   let a = 93;
   let b = 54;
   let c = 9;
   
   if (a >= b){
    if (a >= c){
        console.log("a");
    }

    else {
        console.log("c");
    }
   }

   else {
    if ( b >= c){
        console.log("b");
    }
    else{
        console.log("c");
    }
   }

    
  

    
    