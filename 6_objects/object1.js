function Person(firstName, lastName, day, month, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.day = day;
    this.month = month;
    this.year = year;
}

Person.prototype.getAge = function() {
    // Get the current date and time
    let today = new Date();
  
    // Get the current day
    let currentDay = today.getDate();
  
    // Get the current month
    let currentMonth = today.getMonth() + 1;
  
    // Get the current year
    let currentYear = today.getFullYear();
  
    // Calculate the person's age
    var age = currentYear - this.year;
    if (currentMonth < this.month || (currentMonth == this.month && currentDay < this.day)) {
      age--;
    }
  
    // Return the person's age
    return age;
};

// Define a function to print the information of a Person object
function printPerson(person) {
    console.log("Name: " + person.firstName + " " + person.lastName);
    console.log("Date of birth: " + person.day + "/" + person.month + "/" + person.year);
}

// Ask the user for the information of a Person object
let firstName = prompt("What is your first name? ");
let lastName = prompt("What is your last name? ");
let day = prompt("What is your day of birth? ");
let month = prompt("What is your month of birth? ");
let year = prompt("What is your year of birth? ");

// Create a Person object with the user's information
var person = new Person(firstName, lastName, day, month, year);

// Print the information of the Person object
printPerson(person);

console.log(person.getAge());