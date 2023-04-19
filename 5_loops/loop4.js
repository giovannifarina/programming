// Ask the user for their name
let name = prompt("What is your name? ");

// Ask the user for a number
let number = parseInt(prompt("How many times do you want your name printed? "));

// Print the name the specified number of times
for (let i = 0; i < number; i++) {
  console.log(name);
}