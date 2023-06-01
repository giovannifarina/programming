let numeroIntero = parseFloat(prompt("Inserisci un numero intero"));

if (Number.isInteger(numeroIntero)) {
    if (numeroIntero % 2 === 0) {
        console.log("il numero è pari");
    }
    else {
        console.log("il numero è dispari");
    }
} else {
    console.log("Non è stato inserito un numero intero");
}
