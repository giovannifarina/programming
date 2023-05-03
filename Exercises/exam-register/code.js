const listaEsamiEl = document.getElementById('listaEsami');
const nomeEsameEl = document.getElementById('nomeEsame');
const votoEsameEl = document.getElementById('voto');

let esami = [];

function Esame(nomeEsame, voto) {
    this.nome = nomeEsame;
    this.voto = voto;
}

function aggiungiEsame() {
    let nomeEsame = nomeEsameEl.value;
    let votoEsame = parseInt(votoEsameEl.value);
    if (votoEsame < 18 || votoEsame > 31) {
        alert('Valore voto esame non valido');
        return;
    }
    else {
        let esame = document.createElement('li'); //crea un nuovo elemento
        let oggettoEsame = new Esame(nomeEsame, votoEsame);
        esami.push(oggettoEsame);
        esame.textContent = nomeEsame + " : " + votoEsame.toString();
        listaEsamiEl.appendChild(esame);
    }

}

function calcolaMedia() {
    let sommaVoti = 0;
    for (let esame of esami) {
        sommaVoti += esame.voto;
    }
    let media = sommaVoti / esami.length;
    document.getElementById('media').textContent = media.toString();
}

document.getElementById('bottoneRegistra').addEventListener('click',aggiungiEsame);
document.getElementById('bottoneMedia').addEventListener('click',calcolaMedia);