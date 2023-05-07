import './css/headerSidebar.css';
import './css/todoBoard.css'
import './css/modal.css'
import './domHandler.js';
import {ProjectFactory, addProject, getProjects} from './project.js';
import {TodoFactory} from './todo.js';
import { compareAsc, format } from 'date-fns';
import {projectDisplayHandler, renderProjects} from './domHandler.js';


function createExamples(){
    const exProject = ProjectFactory("House");
    const todo1 = TodoFactory("Clean Bedsheets", new Date(2023, 2, 5));
    const todo2 = TodoFactory("Organize closet", new Date(2023, 2, 5));
    const todo3 = TodoFactory("Buy a new fridge", new Date(2023, 5, 6));
    exProject.addTodo(todo1);
    exProject.addTodo(todo2);
    exProject.addTodo(todo3);

    const ex2Project = ProjectFactory("Studying");
    const todo12 = TodoFactory("Operating Systems HW", new Date(2023, 13, 5));
    const todo22 = TodoFactory("Finish todo Project", new Date(2023, 15, 5));
    ex2Project.addTodo(todo12);
    ex2Project.addTodo(todo22);
    addProject(ex2Project);
    addProject(exProject);

}


createExamples();
renderProjects(getProjects());

