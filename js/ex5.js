/* Tutorial 4
Example 5 JavaScript code
*/

function check(array) {
    var first = array[0];
    var last = array[array.length - 1];
    var itemNumber = array.length;

    return {
        firstElement: first,
        lastElement: last,
        itemNumber: itemNumber
    };
}

var arr1 = [4, 8, 12, 5, 20];
var arr2 = ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}];

var result1 = check(arr1);
var result2 = check(arr2);

console.log(`With ${arr1}, we get ${result1.firstElement}, ${result1.lastElement}, and ${result1.itemNumber}`);
console.log(`With ${arr2}, we get ${result2.firstElement}, ${result2.lastElement}, and ${result2.itemNumber}`);
