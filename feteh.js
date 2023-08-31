
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response))
//     .then(json => console.log(json))

function loadPhotoData() {
    const photoURL = 'https://jsonplaceholder.typicode.com/users';
    fetch(photoURL)
        .then(response => response.json())
        .then(data => displayPhoto(data))
}

function displayPhoto(photos) {
    const userContainer = document.getElementById('user-list')
    for (const user of photos) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.email;
        userContainer.appendChild(li);
    }


}
