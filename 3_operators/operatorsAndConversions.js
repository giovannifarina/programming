// Credits "Leonardo Parisi"

// Non fa la somma ma concatena
let anno = '1991';
console.log(anno + 18);

// bisogna convertire la stringa in un  numero
console.log(Number(anno));
console.log(anno);

// NB: la variabile rimane una stringa
// Number crea una copia che e' un numero
console.log(Number(anno) + 18);

// Conversione di qualcosa che non è un numero
console.log(Number('Pippo'));
// Nan = Not a number = Un numero che non è valido

// POSSO convertire anche in stringa
console.log(String(23));

// NB: javascritp effettua la conversione in automatico
// String + Number = String + String
console.log('Io ho ' + 23 + ' anni');


// Gli altri operatori funzionano nel modo inverso: le stringhe vengono convertite in numeri
console.log('23' - 10);
console.log('10' * 10);

// questo perche gli altri operatori al contrario del + posso fuznioanare solo se stiamo parlando di numeri

let n = '1' + 1;
n = n - 1;
console.log(n);

n = 2 + 3 + 4 + '5';
n = '10' - '4' - '3' - 2 + '5';