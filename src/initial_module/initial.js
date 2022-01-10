import addTodo from '../todo_module/todoAdder.js';
import toDoFactory from '../todo_module/todoFactory.js';
import addProject from '../todo_module/projectAdder.js';
import projectFactory from '../todo_module/projectFactory.js';

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

    sideBar.appendChild(title);
    sideBar.appendChild(projects);

    //default projects examples
    const defaultProject = projectFactory("Default Project");
    addProject(defaultProject);

    const defaultProject2 = projectFactory("Proj2");
    addProject(defaultProject2);

    //Example task
    const todoExample = toDoFactory("Running", "Run for 5 KM daily", "None", 10);
    addTodo(todoExample, defaultProject.todoArray); 

    const ex2 = toDoFactory("Swimming", "Swim for 30 mins in the morning", "None", 10);
    addTodo(ex2, defaultProject2.todoArray);
    
    

}

