let operation = prompt("What type of operation would you like to perform? (sum/multiplication) ");

// Ask the user for the two numbers
let number1 = parseFloat(prompt("What is the first number? "));
let number2 = parseFloat(prompt("What is the second number? "));

let result = undefined;

// Perform the operation
if (operation === "sum") {
  result = number1 + number2;
} else if (operation === "multiplication") {
  result = number1 * number2;
} else {
  console.log("Invalid operation.");
  return;
}

// Display the result
console.log("The result is " + result);