/* Task 1: Create ab array of numbers from 1 to 5 and log to the array to the
   console .*/

   let arr = [1,2,3,4,5];
   console.log(arr);

/* Task 2: Access the first and last element of array and log the value to 
   the console. */ 
    
   let newArr = [1,2,3,4,5,6,7];
   console.log("Length of array:",newArr.length);
   console.log("First element of array:",newArr[0]);
   console.log("Last element of array:",newArr[6]);

// Empty array

   let emptyArr = [];
   console.log("Array is:",emptyArr);  //output - []
   console.log("Length of array is:",emptyArr.length);  //length - 0

// Mixed array 

   let info = ["Aman", 25, 101, "CSE"];
   console.log("Array:",info);
   console.log("Value of first index:",info[0]);
   console.log("Value of first indcixes first value:",info[0][0]);
   console.log("Lenght of first index:", info[0].length);

//Arrays are mutable

   let fruits = ["banana", "apple", "litchi", "mango", "papaya"];
   console.log("Fruits array:", fruits);
   console.log(fruits[0]);                  //banana
   
   fruits[0] = "pineapple";
   console.log(fruits[0]);                 //pineapple
   
   console.log("Fruits array:", fruits);   //['pineapple', 'apple', 'litchi', 'mango', 'papaya']

   fruits[10] = "orange";
   console.log(fruits);      //['pineapple','apple','litchi','mango','papaya',<5 empty items>,'orange']

   console.log(fruits.length);   //11