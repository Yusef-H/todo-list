import './modal.css';
import toDoFactory from './Factories/todoFactory';
/**
 * Function that adds a new todo task to the project's todo array.
 */
function addTodo(todo, projectTodoArray) {
    if(todo.title == "" || todo.description == "")
        return;
    console.log(todo);
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
        todoBoard.appendChild(todoArray[i]);
    }
}

function clearBoard(){
    const todoBoard = document.querySelector('.todo-board');
    while(todoBoard.firstChild){
        todoBoard.removeChild(todoBoard.lastChild);
    }
}

function modalsCreate(){
    const body = document.body;
    const taskModalContainer = document.createElement('div');
    taskModalContainer.classList.add('task-modal-container');
    taskModalContainer.id = "modal-container";
    const taskModal = document.createElement('div');
    taskModal.classList.add('task-modal');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    const taskTitleLabel = document.createElement('h2');
    taskTitleLabel.innerHTML = "Task Title: ";
    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = "text";
    taskTitle.appendChild(taskTitleLabel);
    taskTitle.appendChild(taskTitleInput);
    taskModal.appendChild(taskTitle);

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    const taskDescriptionLabel = document.createElement('h2');
    taskDescriptionLabel.innerHTML = "Description : ";
    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.cols = "25";
    taskDescriptionInput.rows = "5";
    taskDescription.appendChild(taskDescriptionLabel);
    taskDescription.appendChild(taskDescriptionInput);
    taskModal.appendChild(taskDescription);

    const taskModalButtons = document.createElement('div');
    taskModalButtons.classList.add("task-modal-buttons");
    const taskModalClose = document.createElement('button');
    taskModalClose.id = "close";
    taskModalClose.innerHTML = "Close";

    const taskModalSubmit = document.createElement('button');
    taskModalSubmit.innerHTML = "Submit";
    taskModalSubmit.id = "submit";
    taskModalButtons.appendChild(taskModalClose);
    taskModalButtons.appendChild(taskModalSubmit);
    taskModal.appendChild(taskModalButtons);


    taskModalContainer.appendChild(taskModal);
    body.appendChild(taskModalContainer);
}

function modalsStart(){
    const taskModalContainer = document.querySelector('.task-modal-container');
    const addTaskButton = document.querySelector('.add-task-button');
    const closeTaskButton = document.getElementById('close');

    addTaskButton.addEventListener('click', ()=>{
        console.log("ADD TASK BUTTON");
        taskModalContainer.classList.add('show'); 
    })
    closeTaskButton.addEventListener('click', ()=>{
        console.log("CLOSE TASK BUTTON");
        taskModalContainer.classList.remove('show');
    })
    
    
}

export default {addTodo, addProject, showProjectTasks, clearBoard, modalsCreate, modalsStart};
