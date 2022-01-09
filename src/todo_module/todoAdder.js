import toDoFactory from "./todoFactory";



export default function addTodo(todo) {
    const todoBoard = document.querySelector('.todo-board');
    
    const todoTask = document.createElement('div');
    todoTask.classList.add('todo-task')
    const todoTaskTitle = document.createElement('h4');
    todoTaskTitle.innerHTML = todo.title;

    todoTask.appendChild(todoTaskTitle);
    todoBoard.appendChild(todoTask);
    


}