import toDoFactory from "./todo_module/todoFactory";
import initialize from "./initial_module/initial";
import addTodo from "./todo_module/todoAdder";
import projectFactory from "./todo_module/projectFactory";
import showProjectTasks from "./todo_module/showTasks";
import clearBoard from "./todo_module/clearBoard";
import './style.css';
import './initial_module/initial.css';
import './todo_module/todoTasks.css';


initialize();
const projects = document.querySelectorAll(".projects-list");
projects.forEach((project)=>{
    project.addEventListener('click', ()=>{
        clearBoard();
        showProjectTasks(project);
    })
})

