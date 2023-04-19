// Ask the user to type in 2 integers
let firstInteger = parseInt(prompt("Enter the first integer: "));
let secondInteger = parseInt(prompt("Enter the second integer: "));

// Compare the two integers and display the greater one
if (firstInteger > secondInteger) {
  console.log("The greater integer is " + firstInteger);
} else {
  console.log("The greater integer is " + secondInteger);
}