/* Tutorial 4
Example 6 JavaScript code
*/

function words() {
    var output = document.getElementById("output");
    var list = [];

    while (true) {
        var word = prompt("Enter a word:");
        if (word.toLowerCase() === "stop") {
            break;
        }
        list.push(word);
    }
    if (list.length === 0) {
        console.log("No words entered.");
        output.innerHTML = "No words entered.";
        return;
    }
    console.log(list.join("\n"));
    output.innerHTML = list.join("<br>");
}

words();
