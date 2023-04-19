let number = parseInt(prompt("Enter an integer: "));

// Check if the number is between 0 and 100, and a multiple of 10
if (number >= 0 && number <= 100 && number % 10 == 0) {
  // Display the message "Even, small, and multiple of 10"
  console.log("Even, small, and multiple of 10");
}