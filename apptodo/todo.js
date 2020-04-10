let listElement = document.querySelector('#app > ul');
let inputElement = document.querySelector('#app > input');
let buttonElement = document.querySelector('#app > button');
let messageElement = document.querySelector('#msg');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderMessages() {
    let messages = [
        "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.",
        "Well, the way they make shows is, they make one show. That show's called a pilot.",
        "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?",
        "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.",
        "You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.",
        "We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
        "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.",
        "Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
        "Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it?",
        "Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
    ];

    let nums = [];
    let textMessage;

    for(let i = 0; i <= messages.length; i++) {
        nums.push(i);
        let num = Math.floor(Math.random() * ((nums.length-1) - 0) + 0);
        textMessage = document.createTextNode(messages[num]);
    }
    messageElement.appendChild(textMessage);
}

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        todo.close ? todoElement.setAttribute('class', 'item close') : todoElement.setAttribute('class', 'item');

        let containerActions = document.createElement('span');
        
        let todoText = document.createTextNode(todo.todo);

        let deleteElement = document.createElement('a');
        deleteElement.setAttribute('href', '#');
        deleteElement.setAttribute('title', 'Excluir tarefa');
        
        let completeElement = document.createElement('a');
        completeElement.setAttribute('href', '#');
        completeElement.setAttribute('title', 'Finalizar tarefa');

        let pos = todos.indexOf(todo);
        deleteElement.setAttribute('onclick', `deleteTodo(${pos})`);
        completeElement.setAttribute('onclick', `completeTodo(${pos})`)
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(containerActions);
        containerActions.appendChild(completeElement);
        containerActions.appendChild(deleteElement);

        listElement.appendChild(todoElement);
    }
    saveToStorage();
}

function addTodo() {
    let todoText = inputElement.value;
    
    todos.push({
        todo: todoText,
        close: false
    });
    
    inputElement.value = '';
    renderTodos();
}

function deleteTodo(pos) {
    event.preventDefault();
    if (confirm('Deseja realmente excluir esta Tarefa?')) {
        todos.splice(pos, 1);
        renderTodos();
    }
}

function completeTodo(pos) {
    event.preventDefault();
    todos[pos].close ? todos[pos].close = false : todos[pos].close = true;
    renderTodos();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.addEventListener('click', addTodo);

renderMessages();
renderTodos();