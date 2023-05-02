import { format} from 'date-fns'
import {ProjectFactory, doesProjectNameExist, 
        addProject, getProjects, getProjectByName} from './project.js';
import { TodoFactory } from './todo.js';


const sidebarButton = document.querySelector('.sidebar-collapse-button');
const sidebar = document.querySelector('.sidebar');
const todoListContainer = document.querySelector('.todo-list-container');
const projectsContainer = document.querySelector('.sidebar-user-projects');

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-show');
});

function renderProjects(projects){
    clearContainer(projectsContainer);
    projects.forEach((project) => {
        projectDisplayHandler(project);
    })
}

function projectDisplayHandler(project){
    const projectButton = document.createElement('button');
    projectButton.innerHTML = project.projectName;
    projectButton.addEventListener('click', () => {
        clearContainer(todoListContainer);
        displayProjectTodos(project);
    })
    projectsContainer.appendChild(projectButton);

}


function displayProjectTodos(project){
    clearContainer(todoListContainer);
    project.todoList.forEach(todo => {
        displayTodo(todo);
    });
}

function displayTodo(todo){
    const todoContainer = document.createElement('div');
    const leftDiv = document.createElement('div');
    
    const rightDiv = document.createElement('div');

    const checkBox = document.createElement("input");
    const title = document.createElement("h3");
    const date = document.createElement("h3");
    

    checkBox.setAttribute("type", "checkbox");
    leftDiv.appendChild(checkBox);

    title.innerHTML = todo.title;
    leftDiv.appendChild(title);

    console.log(todo.dueDate);
    date.innerHTML = format(todo.dueDate, "yyyy-MM-dd");
    rightDiv.appendChild(date);

    todoContainer.appendChild(leftDiv);
    todoContainer.appendChild(rightDiv);


    todoContainer.classList.add('todo-container');
    todoListContainer.appendChild(todoContainer);
}

function clearContainer(container){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    
}

function handleModal(){
    const addTodoButton = document.querySelector('.add-todo-container button');
    const cancelButton = document.querySelector('.cancel-btn');
    const form = document.querySelector('form');
    const modal = document.querySelector('.modal');
    addTodoButton.addEventListener('click', () => {
        modal.classList.add('visible');
    });
  
    cancelButton.addEventListener('click', () => {
        modal.classList.remove('visible');
    });
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        handleInput();
        

        modal.classList.remove('visible');
    });
};

function handleInput(){
    const todoTitleInput = document.getElementById('title');
    const projectTitleInput = document.getElementById('project');
    const dateInput = document.getElementById('date');
    let newTodo = TodoFactory(todoTitleInput.value, new Date(dateInput.value));
    let project;
    if(!doesProjectNameExist(projectTitleInput.value)){
        project = ProjectFactory(projectTitleInput.value);
        project.addTodo(newTodo);
        addProject(project);
    }
    /** Project already exists */
    else{
        project = getProjectByName(projectTitleInput.value);
        project.addTodo(newTodo);
    }

    renderProjects(getProjects());
    displayProjectTodos(project);
}

handleModal();



export {
    renderProjects
};




