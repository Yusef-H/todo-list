import toDoFactory from "./todo_module/Factories/todoFactory";
import projectFactory from "./todo_module/Factories/projectFactory";
import initialize from "./initial_module/initial";
import domHandler from "./todo_module/domHandler";
import './style.css';
import './initial_module/initial.css';
import './todo_module/todoTasks.css';

domHandler.modalsCreate();
initialize();



const projects = document.querySelectorAll(".projects-list");
projects.forEach((project)=>{
    project.addEventListener('click', function projectListener(e){
        domHandler.clearBoard();
        domHandler.showProjectTasks(project);
    
        
    })
    const submitTaskButton = document.getElementById('submit');
    submitTaskButton.addEventListener('click', function submitter(){
        
        console.log("SUBMIT");
        const taskTitle = document.querySelector('.task-title input').value;
        const taskDescription = document.querySelector('.task-description textarea').value;
        const newTodo = toDoFactory(taskTitle, taskDescription, "o", 10);
        const taskModalContainer = document.querySelector('.task-modal-container');
        domHandler.addTodo(newTodo, project.todoArray);
        domHandler.clearBoard();
        domHandler.showProjectTasks(project);
        taskModalContainer.classList.remove('show');
        document.querySelector('.task-title input').value = "";
        document.querySelector('.task-description textarea').value = "";
    });
})



