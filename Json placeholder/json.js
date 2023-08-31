function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPostData(data))
}
function displayPostData(posts) {

    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const createDiv = document.createElement('div')
        createDiv.classList.add('post')
        createDiv.innerHTML = `
        <h2> ${post.id} </h2>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        
        postContainer.appendChild(createDiv);
    }

}


postData()