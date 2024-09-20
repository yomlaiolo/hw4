/* Tutorial 4
Example 3 JavaScript code
*/

function circle(r) {
    var output = document.getElementById("output");

    const Circle = {
        radius: r,
        circumference: function() {
            return 2 * Math.PI * this.radius;
        },
        area: function() {
            return Math.PI * this.radius * this.radius;
        }
    };

    console.log(`Its circumference is ${Circle.circumference()}`);
    console.log(`Its area is ${Circle.area()}`);
    output.innerHTML = `Its circumference is ${Circle.circumference()}<br>Its area is ${Circle.area()}`;
}
