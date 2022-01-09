
export default function addTodo(todo) {
    const todoBoard = document.querySelector('.todo-board');
    console.log('aaaaaaaaa');
    const todoTask = document.createElement('div');
    todoTask.classList.add('todo-task')
    const todoTaskTitle = document.createElement('h4');
    todoTaskTitle.innerHTML = todo.title;
    todoTaskTitle.classList.add('todo-title');
    const todoDescription = document.createElement('p');
    todoDescription.innerHTML = todo.description;
    todoDescription.classList.add('todo-desc');

    todoTask.appendChild(todoTaskTitle);
    todoTask.appendChild(todoDescription);

    todoBoard.appendChild(todoTask);
    


}