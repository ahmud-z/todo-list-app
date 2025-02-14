const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer');

const date = new Date()
const d = new Date();
const yr = d.getFullYear()

function addTask() {
    if (todoInput.value === '') {
        alert('must have to enter some text');
    } else {
        let dateContainer = document.createElement('p')
        // dateContainer.innerHTML = (yr + "-" + (d.getMonth() + 1) + "-" + d.getDate())
        div1 = document.createElement('div')
        div2 = document.createElement('div')


        let li = document.createElement('li');
        li.innerHTML = todoInput.value;

        let span = document.createElement('span');
        span.innerHTML = '<i class="bi bi-trash"></i>';
        
        div1.appendChild(dateContainer)

        li.appendChild(dateContainer);
        li.appendChild(span);
        li.classList.add('list-item');
        dateContainer.classList.add('dateContainer')
        
        div2.classList.add('test')
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