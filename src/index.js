import toDoFactory from "./todo_module/Factories/todoFactory";
import projectFactory from "./todo_module/Factories/projectFactory";
import initialize from "./initial_module/initial";
import domHandler from "./todo_module/domHandler";
import './style.css';
import './initial_module/initial.css';
import './todo_module/todoTasks.css';


initialize();
const projects = document.querySelectorAll(".projects-list");
projects.forEach((project)=>{
    project.addEventListener('click', ()=>{
        domHandler.clearBoard();
        domHandler.showProjectTasks(project);
    })
})

