// Initialize a variable to store the sum
let sum = 0;

// Initialize a variable to store the current number
let number;

// Start a loop that will continue until the user enters the "*" character
while (number !== "*") {
  // Ask the user to enter a number
  number = parseInt(prompt("Enter a number: "));

  // If the number is not equal to the "*" character, add it to the sum
  if (number !== "*") {
    sum += number;
  }
}

// Print the sum
console.log("The sum is " + sum);