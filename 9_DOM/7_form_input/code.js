function logFormValues() {
    event.preventDefault(); // prevent form submission

    // Get form values
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let dob = document.getElementById('dob').value;
    let occupation = document.querySelector('input[name="occupation"]:checked').value;
    let colors = [];
    let colorCheckboxes = document.querySelectorAll('input[name="colors[]"]:checked');
    for (colorElement of colorCheckboxes) {
        colors.push(colorElement.value);
    }
    /* alternative
    for (let i = 0; i < colorCheckboxes.length; i++) {
      colors.push(colorCheckboxes[i].value);
    }
    */

    // Log form values
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Date of Birth:', dob);
    console.log('Occupation:', occupation);
    console.log('Colors:', colors);
}

document.querySelector('form').addEventListener('submit',logFormValues);