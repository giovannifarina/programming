function changeText() {
    let heading = document.getElementById('myHeading');
    heading.innerHTML += ' Hello!';
}

let button = document.querySelector('.myButton');

button.addEventListener("click", changeText);