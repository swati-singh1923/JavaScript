const fav_movie = "Harry Potter";
let guess = prompt("Guess my favorite movie?");
while(guess != fav_movie && guess != "quit"){
    guess = prompt("Wrong guess. Please try again.");
}

if(guess == fav_movie){
    console.log("Your guess is correct.");
}

else{
    console.log("You can quit");
}