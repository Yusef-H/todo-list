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
        projectHandler(project);
    })
}

function projectHandler(project){
    const projectButton = document.createElement('button');
    projectButton.innerHTML = project.projectName;
    clearContainer(todoListContainer);
    handleProjectTodos(project);
    
    projectButton.addEventListener('click', () => {
        clearContainer(todoListContainer);
        handleProjectTodos(project);
    })
    projectsContainer.appendChild(projectButton);

}


function handleProjectTodos(project){
    clearContainer(todoListContainer);
    project.todoList.forEach(todo => {
        handleTodo(todo, project);
    });
}

function handleTodo(todo, project){
    const todoContainer = document.createElement('div');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    const checkBox = document.createElement("input");
    const title = document.createElement("h3");
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

    todoContainer.classList.add('todo-container');
    todoListContainer.appendChild(todoContainer);
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
        const todoTitle = e.path[2].firstChild.lastChild.innerHTML;
        project.deleteTodo(todoTitle);
        renderProjects(getProjects());
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
    handleProjectTodos(project);
}

handleModal();



export {
    renderProjects
};




