/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Number() converts the string "5" to the number 5, so that the subtraction doesn't rely on JavaScript's implicit conversion
let result = Number("5") - 2;
console.log("The result is: " + result);

// "false" in quotes is a non-empty string, which is truthy, so Boolean("false") gave true.
// Using the Boolean value false with no quotes makes isValid actually false
let isValid = false;
if (isValid) {
  console.log("This is valid!");
}

let age = "25";
// since age is string "25", + would join them as text ("255"). Number() converts age to the number 25 first, so that + can do addition easily
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Implicit conversion
let score = 7;
console.log(score, typeof score);
let scoreText = "Score: " + score;
console.log(scoreText, typeof scoreText);

// Explicit conversion with an edge case
let emptyValue = null;
console.log(emptyValue, typeof emptyValue);
let convertedValue = Boolean(emptyValue);
console.log(convertedValue, typeof convertedValue);
