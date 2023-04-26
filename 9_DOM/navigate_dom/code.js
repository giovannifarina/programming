let listaSpesa = document.getElementById('listaSpesa');
let listItems = listaSpesa.querySelectorAll('li');

for (var listItem of listItems) {
    listItem.setAttribute('style', 'font-weight: bold;');
}
