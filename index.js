function addTodo(text) {
    var todoList = document.getElementById('todo-list');
    var todo = createTodoElement(text);
    todoList.appendChild(todo);
}

function createTodoElement(title) {
    // Create todo li container
    var todoLi = document.createElement('li');
    var titleSpan = document.createElement('span');
    titleSpan.innerText = title;
    todoLi.appendChild(titleSpan);

    // Create swipe controls
    var controls = document.createElement('div');
    controls.classList.add('controls');
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "DELETE";
    controls.appendChild(deleteBtn);

    todoLi.appendChild(controls);
    return todoLi;
}