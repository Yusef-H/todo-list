import {format, isToday, isWithinInterval, subDays} from 'date-fns'
import {ProjectFactory, doesProjectNameExist, 
        addProject, getProjects, getProjectByName} from './project.js';
import { TodoFactory } from './todo.js';

const homeButton = document.querySelector('.sidebar-home');
const todayButton = document.querySelector('.sidebar-today');
const weekButton = document.querySelector('.sidebar-week');
const sidebarButton = document.querySelector('.sidebar-collapse-button');
const sidebar = document.querySelector('.sidebar');
const todoListContainer = document.querySelector('.todo-list-container');
const projectsContainer = document.querySelector('.sidebar-user-projects');



function renderProjects(projects){
    clearContainer(projectsContainer);
    projects.forEach((project) => {
        projectHandler(project);
    })
}

function projectHandler(project){
    const projectButton = document.createElement('button');
    projectButton.innerHTML = project.projectName;
    clearContainer(todoListContainer);
    displayProjectTodos(project);

    projectButton.addEventListener('click', () => {
        displayProjectTodos(project);
    })
    projectsContainer.appendChild(projectButton);

}


function displayProjectTodos(project, checkToday, checkWeek){
    project.todoList.forEach(todo => {
        if(checkToday){
            if(isToday(todo.dueDate))
                displayTodo(todo, project);
        }
        else if(checkWeek){
            const startDate = subDays(new Date(), 8); // start date last 7 days
            if(isWithinInterval(todo.dueDate, {start: startDate, end: new Date()}))
                    displayTodo(todo);
        }

    });
}

function displayTodo(todo, project){
    const todoContainer = createTodo();
    todoListContainer.appendChild(todoContainer);
}

function createTodo(){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    const checkBox = document.createElement("input");
    const title = document.createElement("h3");
    title.classList.add('todo-title');
    const date = document.createElement("h3");

    checkBox.setAttribute("type", "checkbox");
    title.innerHTML = todo.title;
    leftDiv.appendChild(checkBox);
    leftDiv.appendChild(title);

    const deleteButton = createDeleteButton();
    handleDeleteEvent(deleteButton, project);
    date.innerHTML = format(todo.dueDate, "yyyy-MM-dd");
    rightDiv.appendChild(date);
    rightDiv.appendChild(deleteButton);

    todoContainer.appendChild(leftDiv);
    todoContainer.appendChild(rightDiv);

}

function createDeleteButton(){
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('del-btn');
    deleteButton.innerHTML = 'X';
    deleteButton.title = 'Delete Todo';
    return deleteButton;
}

function handleDeleteEvent(deleteButton, project){  
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            const todoTitle = deleteButton.closest(".todo-container").querySelector(".todo-title").innerHTML;
            project.deleteTodo(todoTitle);
            displayProjectTodos(project);
        })
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
  
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleInput();
        modal.classList.remove('visible');
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
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


function handleButtons(){
    sidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-show');
    });
    homeButton.addEventListener('click', () => {
        clearContainer(todoListContainer);
        getProjects().forEach((project) => {
            displayProjectTodos(project);
        })
    })
    todayButton.addEventListener('click', () => {
        clearContainer(todoListContainer)
        getProjects().forEach((project) => {
            displayProjectTodos(project, true);
        })
    })
    weekButton.addEventListener('click', () => {
        
        clearContainer(todoListContainer);
        getProjects().forEach((project) => {
            displayProjectTodos(project, false, true);
        })
    })
}

handleButtons();
handleModal();



export {
    renderProjects
};




