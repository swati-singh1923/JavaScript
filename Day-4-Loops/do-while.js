/* Task  1:Write a program to print numbers from 1 to 10 using do-while loop. */ 

   let i = 1;
   do{
    console.log(i);
    i++;
   }
   while(i<=10);

/* Task 2:Write a program to calculate factorial of a number using do-while loop. */ 

   let n = 5;
   let j = 1;
   fact = 1;
   do{
      fact = fact * j;
      j++
   }while(j<=n);
   console.log(`Factorial of 5 = ${fact}`);