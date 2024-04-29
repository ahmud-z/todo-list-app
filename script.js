const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer');

function addTask() {
    if (todoInput.value === '') {
        alert('must have to enter some text');
    } else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;

        let span = document.createElement('span');
        span.innerHTML = '<i class="bi bi-trash"></i>';
        li.appendChild(span);
        li.classList.add('list-item');
        listContainer.appendChild(li);
    }
    todoInput.value = '';
    storeDataInLocal();
}

listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        storeDataInLocal();
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        storeDataInLocal();
    } else if (event.target.tagName === 'I') {
        event.target.parentElement.parentElement.remove();
        storeDataInLocal();
    }
}, false);

function storeDataInLocal() {
    localStorage.setItem('todoData', listContainer.innerHTML);
}
function showSyncData() {
    listContainer.innerHTML = localStorage.getItem('todoData');
}

showSyncData();