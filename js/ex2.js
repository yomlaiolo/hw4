/* Tutorial 4
Example 2 JavaScript code
*/

function fahrenheitToCelsius(deg) {
    return (deg - 32) * 5 / 9;
}

function printFtoC(deg) {
    var output = document.getElementById("output");
    var result = fahrenheitToCelsius(deg);
    console.log(deg + " Fahrenheit = " + result + " Celsius");
    output.innerHTML = deg + " Fahrenheit = " + result + " Celsius";
}

let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);
// Test with 32 degrees Fahrenheit (No variables)
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees Celsius`);
// Create a variable and test
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7).toPrecision(4)} degrees Celsius`);