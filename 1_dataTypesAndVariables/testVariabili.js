// Dichiarazione ed assegnazione variabili e costanti"
const NOME = "Giovanni";
let parola = "Pippo";
let numero = 0;
let confuso = true;
let niente = null;
//console.log(NOME);
//console.log(parola);
//console.log(numero);
//console.log(confuso);
//console.log(niente);
//console.log("Fine parte 1");

/* Modifica assegnazione variabili */
parola = "cosa";
numero = 6;

let numero2 = numero;
let parola2 = parola;

numero = 7;
parola2 = "unaparola";

let confuso2 = confuso;
confuso2 = false;
// confuso = "ciao"; // EVITARE

/*
console.log(parola);
console.log(parola2);
console.log(numero);
console.log(numero2);
console.log(confuso);
console.log(confuso2);

console.log("Fine parte 2");
*/

let primoNumero = 1;
let secondoNumero = 2;

let variabileTemporanea = primoNumero;
primoNumero = secondoNumero; 
secondoNumero = variabileTemporanea; 

// EXTRA
[primoNumero, secondoNumero] = [secondoNumero, primoNumero]

console.log(primoNumero);
console.log(secondoNumero);
