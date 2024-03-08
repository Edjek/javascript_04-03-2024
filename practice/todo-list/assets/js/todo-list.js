const submit = document.querySelector('#btn');
const todoList = document.querySelector('#todo-list');

submit.addEventListener('click', function () {
    const input = document.querySelector('#input');
    if (input.value != '') {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;
        todoList.prepend(listItem);
    }
});

todoList.addEventListener('click', function (e) {
    e.target.style.textDecoration = 'line-through';
});

todoList.addEventListener('dblclick', function (e) {
    e.target.remove();
});
