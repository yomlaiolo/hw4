/* Tutorial 4
Example 4 JavaScript code
*/

function calculate() {
    var output = document.getElementById("output");
    const values = [3, 11, 7, 2, 9, 10];
    var sum = 0;
    var max = values[0];
    var min = values[0];

    for (var i = 0; i < values.length; i++) {
        sum += values[i];
        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    }

    console.log(`The sum of the values is ${sum}`);
    console.log(`The maximum value is ${max}`);
    console.log(`The minimum value is ${min}`);
    output.innerHTML = `The sum of the values is ${sum}<br>The maximum value is ${max}<br>The minimum value is ${min}`;
}
