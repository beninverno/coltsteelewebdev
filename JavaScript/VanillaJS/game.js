var numToGuess = 4;
var guess = Number(prompt("Guess a number!"));
if (guess < numToGuess) {
    alert("Too low!");
}
else if (guess > numToGuess) {
    alert("Too high!");
}
else {
    alert("You guessed it!");
}