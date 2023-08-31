function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data));
}
function displayPhoto(photos) {
    const photoContainer = document.getElementById('photo-container')
    for (const photo of photos) {
        console.log(photo);
        const creatDiv = document.createElement('div');
        creatDiv.classList.add('header1')
        creatDiv.innerHTML = `
        <h2> ${photo.albumId} </h2>
        <h3> ${photo.id} </h3>
        <img src="${photo.thumbnailUrl}" alt="">
        <p> ${photo.title}</p>
        <img src="${photo.url}" alt="">
        `;
        photoContainer.appendChild(creatDiv);
    }

}

loadPhoto();