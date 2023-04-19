// Ask the user to enter an integer
let number = parseInt(prompt("Enter an integer: "));

// Check if the number is even and between 0 and 100
if (number % 2 == 0 && number >= 0 && number <= 100) {
  // Display the message "Even and Small"
  console.log("Even and Small");
} else {
  // Display the message "Not even and small"
  console.log("Not even and small");
}