// Ask the user for two numbers
let number1 = parseInt(prompt("Enter the first number: "));
let number2 = parseInt(prompt("Enter the second number: "));

// Check if both numbers are greater than 10 or both are equal to 0
if (number1 > 10 && number2 > 10 || number1 == 0 && number2 == 0) {
  // Display the message "special condition met"
  console.log("special condition met");
} else {
  // Display the message "condition not met"
  console.log("condition not met");
}