function checkPassword() {
    let password = document.getElementById("password").value;
    let passwordCheck =  document.getElementById("passwordCheck").value;
    if (password === passwordCheck) {
        alert('Le due password coincidono');
    }
    else {
        alert('Le due password NON coincidono, riprovare');
    }
    event.preventDefault(); // impedisce l'esecuzione del gestore dell'evento di default del browser
}

document.getElementById("passForm").addEventListener("submit", checkPassword);