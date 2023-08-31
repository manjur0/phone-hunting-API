
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

function displayPost(posts) {
    const postsContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')

        postDiv.innerHTML = `
            <h2> ${post.id} </h2>
            <h3>${post.title}</h3>
            <p>${post.body}</p>

        `;
        postsContainer.appendChild(postDiv)
    }

}
loadData()

/* */