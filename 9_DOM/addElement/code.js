function addImage() {
    // Create an image element
    let img = document.createElement('img');
    // Set the source and alt attributes of the image
    img.src = 'cat.jpg'; // Replace with the actual image URL

    // Append the image element to the imageContainer div
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.appendChild(img);
}

document.getElementById('bottoneImmagine').addEventListener('click', addImage);