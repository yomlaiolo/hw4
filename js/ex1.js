/* Tutorial 4
Example 1 JavaScript code
*/

function doOperation(n1, n2, operation) {
    var output = document.getElementById("output");

    if (checkNb(n1) && checkNb(n2) && checkOp(operation)) {
        n1 = Number.parseInt(n1);
        n2 = Number.parseInt(n2);
        var result;
        if (operation == "+")
            result = n1 + n2;
        else if (operation == "-")
            result = n1 - n2;
        else if (operation == "*")
            result = n1 * n2;
        else if (operation == "/")
            result = n1 / n2;
        console.log(n1 + " " + operation + " " + n2 + " = " + result);
        output.innerHTML = n1 + " " + operation + " " + n2 + " = " + result;
    }
}

function checkNb(nb) {
    if (!isNaN(nb) && Number.isInteger(Number.parseInt(nb)))
        return true;
    else
        return false;
}

function checkOp(op) {
    if (op == "+" || op == "-" || op == "*" || op == "/")
        return true;
    else
        return false;
}
