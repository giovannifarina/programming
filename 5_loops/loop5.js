// Ask the user to enter an integer between 1 and 10
let number = parseInt(prompt("Enter an integer between 1 and 10: "));

// Check if the number is between 1 and 10
if (number < 1 || number > 10) {
  // If the number is not between 1 and 10, print a message
  console.log("Please enter an integer between 1 and 10.");
} else {
  // If the number is between 1 and 10, print the little table
  for (let i = number; i <= i*10; i += number) {
    console.log(i);
  }
}