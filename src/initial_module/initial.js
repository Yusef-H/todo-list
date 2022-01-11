import domHandler from '../todo_module/domHandler.js';
import toDoFactory from '../todo_module/Factories/todoFactory.js';
import projectFactory from '../todo_module/Factories/projectFactory.js';

export default function initialize(){

    const body = document.body;
    //Side bar
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');
    body.appendChild(sideBar);  

    //todo list title
    const title = document.createElement('div');
    title.innerHTML = "Todo List";
    title.classList.add('side-bar-title');

    //projects title
    const projects = document.createElement('div');
    projects.innerHTML = "Projects: ";
    projects.classList.add('projects-title');

    //Todo's board
    const todoBoard = document.createElement('div');
    todoBoard.classList.add('todo-board');
    body.appendChild(todoBoard);

    //Add a new Project Button
    const addProjectButton = document.createElement('button');
    addProjectButton.innerHTML = "Add Project";
    addProjectButton.classList.add('add-project-button');

    //Add a new todo task Button
    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = "Add Task";
    addTaskButton.classList.add('add-task-button');

    const addButtons = document.createElement('div');
    addButtons.classList.add('add-buttons');
    addButtons.appendChild(addProjectButton);
    addButtons.appendChild(addTaskButton);

    sideBar.appendChild(title);
    sideBar.appendChild(projects);
    sideBar.appendChild(addButtons);

    //default projects examples
    const defaultProject = projectFactory("Default Project");
    domHandler.addProject(defaultProject);

    const defaultProject2 = projectFactory("Proj2");
    domHandler.addProject(defaultProject2);

    //Example task
    const todoExample = toDoFactory("Running", "Run for 5 KM daily", "None", 10);
    domHandler.addTodo(todoExample, defaultProject.todoArray); 

    const ex2 = toDoFactory("Swimming", "Swim for 30 mins in the morning", "None", 10);
    domHandler.addTodo(ex2, defaultProject2.todoArray);
    
    

}

