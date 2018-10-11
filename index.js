
function addTodo(text) {
var todoList = document.getElementById('todo-list');
var todo = createTodoElement(text);
todoList.appendChild(todo);
}

function createTodoElement(title) {
// Create todo li container
var todoLi = document.createElement('li');
todoLi.classList.add('todo');
var titleSpan = document.createElement('span');
titleSpan.innerText = title;
titleSpan.classList.add('todo-text');
todoLi.appendChild(titleSpan);

// Create swipe controls
var controls = document.createElement('div');
controls.classList.add('controls');
var deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete');
deleteBtn.innerText = "DELETE";
deleteBtn.onclick = function () {
    var todo = this.parentNode.parentNode;
    todo.parentNode.removeChild(todo);
};

controls.appendChild(deleteBtn);

todoLi.appendChild(controls);
return todoLi;
}

var currentControls;
var mouseDown = false;
var startX = 0;
var currentX = 0;

var todos = document.getElementById('todo-list');
todos.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    currentControls = getControls(event);
    currentControls.classList.remove('transition');
});

todos.addEventListener('mouseup', (event) => {
    resetControls();
    currentControls = null;
});

todos.addEventListener('mouseout', (event) => {
    resetControls();
    currentControls = null;
});

todos.addEventListener('mousemove', (event) => {
    if (!currentControls) return;

    currentX = event.clientX;
    var diff = startX - currentX;

    if (diff > 0 && !currentControls.classList.contains('visible')) {   
        var width = currentControls.offsetWidth;
        var margin = diff > width ? 0 : -width + diff;
        currentControls.style.marginRight = margin + 'px';
    }
    else if (diff < 0) {
        var width = currentControls.offsetWidth;
        var margin = diff < -width ? -width : diff;
        currentControls.style.marginRight = margin + 'px';
    }
});

function getControls(event) {
    var parent = event.target.parentNode;
    while(!parent.classList.contains('todo')) {
        parent = parent.parentNode;
    }
    
    var controls = parent.getElementsByClassName('controls')[0];
    return controls;
}

function resetControls() {
    if (!currentControls) return;
    currentControls.classList.add('transition');
    var marginText = currentControls.style.marginRight;
    var margin = +marginText.substr(0, marginText.length - 2);
    
    if (margin > -currentControls.offsetWidth / 2 && margin != 0) {
        currentControls.style.removeProperty('margin-right');
        currentControls.classList.add('visible');
    }
    else if (margin < -currentControls.offsetWidth / 2) {
        currentControls.style.removeProperty('margin-right');
        currentControls.classList.remove('visible');
    }
}
