/* Task 1: Write a program that uses a switch case to determine 
   a number (1-7) and log the result to the console. */
   
   let day = 0;

   switch(day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
        
    case 3:
        console.log("Wednesday");
        break;
        
    case 4:
        console.log("Thursday");
        break;
        
    case 5:
        console.log("Friday");
        break;
        
    case 6:
        console.log("Saturday");
        break;
        
    case 7:
        console.log("Sunday");
        break;
        
    default :
        console.log("Not a day.");    
   }

/* Task 2: Write a program that uses a switch case to assign a grade 
   ('A', 'B', 'C', 'D','F') based on a score and log the result to the 
   console. */
   
   let score = 'A';

   switch(score) {

    case 'A':
        console.log("Grade: A");
        break;

    case 'B':
        console.log("Grade: B");
        break;

    case 'C':
        console.log("Grade: C");
        break;
        
    case 'D':
        console.log("Grade: D");
        break;

    case 'F':
        console.log("Fail");
        break;

    default:
        console.log("Not valid");    
   }

/*Practice Question: WAP to determine which kind of pet you owned and log the 
  result to the console. */  
  
  let pet = 'dog';
  let result;

  switch(pet){

    case 'dog':
        result = "I own a dog.";
        break;

    case 'cat':
        result = "I own a cat.";
        break;   
        
    case 'cow':
        result = "I own a cow.";
        break;
        
    case 'parrot':
        result = "I own a parrot.";
        break;
        
    default:
        result = "I don't have any pet.";    
  }

  console.log(result);
    