let primoNumero = parseInt(prompt("inserisci un numero intero"));
let secondoNumero = parseInt(prompt("inserisci un numero intero"));
let terzoNumero = parseInt(prompt("inserisci un numero intero"));

let maggiore;
if (primoNumero >= secondoNumero && primoNumero >= terzoNumero){
    maggiore = primoNumero;
}
else if (secondoNumero >= primoNumero && secondoNumero >= terzoNumero){
    maggiore = secondoNumero;
}
else {
    maggiore = terzoNumero;
}

console.log(maggiore);
