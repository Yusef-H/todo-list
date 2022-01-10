import toDoFactory from "./todo_module/todoFactory";
import initialize from "./initial_module/initial";
import addTodo from "./todo_module/todoAdder";
import projectFactory from "./todo_module/projectFactory";
import showProjectTasks from "./todo_module/showTasks";
import './style.css';
import './initial_module/initial.css';
import './todo_module/todoTasks.css';


initialize();
const projects = document.querySelectorAll(".projects-list");
// console.log(projects);
projects.forEach((project)=>{
    project.addEventListener('click', ()=>{
        showProjectTasks(project);
    })
})

