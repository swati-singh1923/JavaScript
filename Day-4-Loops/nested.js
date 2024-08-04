/*Task 1: Write a program to print a patter using nested for loop.*/

let n = 5;  
let pattern = ''
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        pattern += "*";
    }
    pattern += '\n';
}
console.log(pattern);

/*Task 2:Write a program to print numbers from 1 to 10, but skip the number 5 
  using continue statement.*/

for(let i=1; i<=10; i++){
    if(i==5){
        console.log("5 is detected.");
        continue;
    }
    console.log(`Number of i is = ${i}`);
}

/*Task 3:Write a program to print numbers from 1 to 10, but stop the loop when 7 is detected 
  using break statement.*/

  for(let j=1; j<=10; j++){
    if(j==7){
        console.log("7 is detected.");
        break;
    }
    console.log(`Number of j is = ${j}`);
}

  
