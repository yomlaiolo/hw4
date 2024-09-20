/* Tutorial 4
Example 7 JavaScript code
*/

function countVowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            count++;
        }
    }
    return count;
}

function isVowel(c) {
    var vowels = "aeiouy";
    if (vowels.indexOf(c) !== -1)
        return true;
    return false;
}

function isPalindrome(str) {
    if (str === str.split("").reverse().join(""))
        return true;
    return false;
}

var str = prompt("Enter a string:");
str = str.toLowerCase();
var vowels = countVowels(str);
var palindrome = isPalindrome(str);
var output = document.getElementById("output");
output.innerHTML = str + " contains " + vowels + " vowels " + (palindrome ? "and is a palindrome." : "and is not a palindrome.");
console.log(str + " contains " + vowels + " vowels " + (palindrome ? "and is a palindrome." : "and is not a palindrome."));

