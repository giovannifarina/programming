let listaSpesa = document.getElementById('listaSpesa');
let listItems = listaSpesa.querySelectorAll('li');

for (var listItem of listItems) {
    listItem.setAttribute('style', 'font-weight: bold;');
}

let paragraph = document.createElement('p'); //crea un nuovo elemento
paragraph.textContent = 'Questo è un nuovo paragrafo aggiunto con JavaScript!'; //importa il contenuto testuale

// Append the paragraph element to the body
document.body.appendChild(paragraph);   // aggiungi elemento in coda al documento

let paragrafo = "<p>Altro Paragrafo!</p>";
document.querySelector("div").innerHTML = paragrafo; //aggiorna l'HTML interno