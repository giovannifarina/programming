let age = parseInt(prompt("What is your age? "));

// Determine the user's age group
if (age >= 0 && age <= 12) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}