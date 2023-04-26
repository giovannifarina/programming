let listaSpesa = document.getElementById('listaSpesa');
let listItems = listaSpesa.querySelectorAll('li');

for (var listItem of listItems) {
    listItem.setAttribute('style', 'font-weight: bold;');
}

let paragraph = document.createElement('p');
paragraph.textContent = 'Questo è un nuovo paragrafo aggiunto con JavaScript!';

// Append the paragraph element to the body
document.body.appendChild(paragraph);

let paragrafo = "<p>Altro Paragrafo!</p>";
document.querySelector("div").innerHTML = paragrafo;