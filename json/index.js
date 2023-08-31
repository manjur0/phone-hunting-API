function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(user => user.json())
    .then(data => usersList(data));
}

// function displayUser(data){
//     const ul = document.getElementById('user-list');
//     for(const user of data){
//         const li = document.createElement('li')
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }


// function usersList(data){
//     const ol = document.getElementById('users-list');
//     for(const user of data){
//         const li = document.createElement('li');
//         li.innerText= user.username;
//         ol.appendChild(li);
//     }
// }

function usersList(data){
    const ol = document.getElementById('users-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText= user.address.city;
        ol.appendChild(li);
    }
}