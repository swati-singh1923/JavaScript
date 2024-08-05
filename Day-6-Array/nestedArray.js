//Nested or Multi Dimensional Array: Array of arrays.

//Task 1:Create a two dimentional array (matrix) and log the entire array to console.

let nums = [[2,3,9] , [3,4], [1,6], [4,5]];
console.log(nums);
console.log(`Length of array is: ${nums.length}`);
console.log(`Array of zero index: ${nums[0]}`);
console.log(`Value is: ${nums[2][0]}`);

//Task 2:Access and log a specific element from the two dimensinal array.

let newNums = nums[0][2];
console.log("Element is:",newNums);

//Task 3:Create a nested array to show the following tic-tac-toe game state.

let tic_tacGame = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(tic_tacGame);

//replace the null with 'O' from first index 

tic_tacGame[1][0] = 'O';
console.log(tic_tacGame);


