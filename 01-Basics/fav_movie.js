//Write a javascript program to guess the favorite movie.A

const fav_movie = "Harry Potter";
let guess = prompt("Guess my favorite movie?");
while(guess != fav_movie && guess != "quit"){
    guess = prompt("Wrong guess. Please try again.");
}

if(guess == fav_movie){
    alert("Your guess is correct.");
}

else{
    alert("You can quit");
}