/**
 * Function that adds a new todo task to the project's todo array.
 */
export default function addTodo(todo, projectTodoArray) {
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
    projectTodoArray.push(todoTask);
}
