/**
 * Function that adds a new todo task to the project's todo array.
 */
function addTodo(todo, projectTodoArray) {
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

function addProject(project){
    const sideBar = document.querySelector('.side-bar');
    const defaultProject = document.createElement('div');
    defaultProject.todoArray = project.todoArray;
    defaultProject.innerHTML = project.title;
    defaultProject.id = project.title;
    defaultProject.classList.add('projects-list');
    sideBar.appendChild(defaultProject);
}

const showProjectTasks = (project) => { 
    const todoBoard = document.querySelector('.todo-board');
    var todoArray = Array.from(project.todoArray);
    for(let i=0; i<todoArray.length; i++){
        console.log(todoArray[0]);
        todoBoard.appendChild(todoArray[i]);
    }
}

function clearBoard(){
    const todoBoard = document.querySelector('.todo-board');
    while(todoBoard.firstChild){
        todoBoard.removeChild(todoBoard.lastChild);
    }
}

export default {addTodo, addProject, showProjectTasks, clearBoard};
