
function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => dipslayTodos(data));
}

function dipslayTodos(todos) {
    const todoContainer = document.getElementById('todots-conatainer');
    for (const todo of todos) {

        console.log(todo)
        const todoDiv = document.createElement('div')
        todoDiv.innerHTML = ` 
        <h2>Completation: ${todo.completed === true? 'It completed' : "it's not complete"} </h2>
        <h2>User Id: ${todo.id}</h2>
        <h2>User: ${todo.userId}</h2>
        <p>User Title:${todo.title}</p>
    
    `
        todoContainer.appendChild(todoDiv);
    }
}
loadTodos() 