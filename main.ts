/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-30
 * @fileoverview this program asks the user to input a positive integer. then the program counts down to 0 from the given integer
 */

//variables
let integer = Number(prompt("Enter a positive integer:"));
let currentnumber = ""
const end = 0;

//while loop to ask the user for a different number if the first one is wrong
while (integer < 1) {
  integer = Number(prompt("Invalid integer, please enter a positive integer:"));
}
//do-while loop
do { (integer > end) 
  currentnumber += integer + "\n"
  integer--;
} while (integer >= end)
//output
console.log(currentnumber);

console.log("\nDone");

