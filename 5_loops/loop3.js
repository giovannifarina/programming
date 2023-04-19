let input;

// Start a loop that will continue until the user types "alt"
while (input !== "alt") {
  // Ask the user to enter an integer
  input = parseInt(prompt("Enter an integer: "));

  // Check if the input is an integer
  if (isNaN(input)) {
    // If the input is not an integer, print a message
    console.log("Please enter an integer.");
  } else {
    // If the input is an integer, print the number at the console
    console.log(input);
  }
}

// Terminate the program
console.log("Program terminated.");