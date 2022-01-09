import addTodo from '../todo_module/todoAdder.js';
import toDoFactory from '../todo_module/todoFactory.js';
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

    //default projects examples
    const defaultProject = document.createElement('div');
    defaultProject.innerHTML = "Default Project";
    defaultProject.classList.add('projects-list');

    const defaultProject2 = document.createElement('div');
    defaultProject2.innerHTML = "Default Project2";
    defaultProject2.classList.add('projects-list');

    sideBar.appendChild(title);
    sideBar.appendChild(projects);
    sideBar.appendChild(defaultProject);
    sideBar.appendChild(defaultProject2);

    //Todo's board

    const todoBoard = document.createElement('div');
    todoBoard.classList.add('todo-board');
    body.appendChild(todoBoard);

    //Example task
    const todoExample = toDoFactory("Running", "Run for 5 KM daily", "None", 10);
    addTodo(todoExample);

    

}

