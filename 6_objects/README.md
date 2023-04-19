- 1) Definire un oggetto *Persona* in grado di collezionare le informazioni su una singola persona. L'oggetto tenere traccia delle seguenti informazioni: nome, cognome, giorno, mese, anno di nascita. Definire il costruttore per l'oggetto *Persona*. Infine, scrivere un programma che chiede all'utente le informazioni sopra citate e le stampa
- 2) Aggiornare la classe *Persona* aggiungendo la funzione calcolaEta(giorno, mese, anno) che prende come parametri il giorno, il mese, e l'anno corrette (ottenuti tramite il codice qui di seguito) e ritorna l'età della persona;

```
let today = new Date();

// Get the current day
let day = today.getDate();

// Get the current month
let month = today.getMonth() + 1;

// Get the current year
let year = today.getFullYear();
```