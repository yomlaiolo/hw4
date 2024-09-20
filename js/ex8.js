/* Tutorial 4
Example 8 JavaScript code
*/

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNbr = randomInt(1, 100);
var guess;
var attempts = 0;
var output = document.getElementById("output");

do {
    guess = parseInt(prompt("Enter a number between 1 and 100:"));
    attempts++;
    if (guess < randomNbr) {
        alert("Too low, guess again");
    } else if (guess > randomNbr) {
        alert("Too high, guess again");
    } else {
        alert("Correct! You took " + attempts + " attempts to guess " + randomNbr + ".");
        output.innerHTML = "Correct! You took " + attempts + " attempts to guess " + randomNbr + ".";
    }
} while (guess !== randomNbr);
