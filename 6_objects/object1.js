function Person(firstName, lastName, day, month, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.day = day;
    this.month = month;
    this.year = year;
}

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