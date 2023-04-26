function createNewElement() {
    // Create a new <div> element
    var newElement = document.createElement('div');

    // Set id and class attributes for the new element
    newElement.id = 'myNewElement' + idCounter.toString();
    idCounter++;
    newElement.className = 'my-custom-class';
    //  newElement.classList.add('my-custom-class', 'another-class', 'third-class'); // per aggiungere più classi


    // Set inner text for the new element
    newElement.innerText = 'This is a dynamically created element!';

    // Append the new element to the DOM
    document.body.appendChild(newElement);
  }

let idCounter = 1

document.getElementById('bottone').addEventListener('click', createNewElement);