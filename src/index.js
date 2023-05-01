import './css/headerSidebar.css';
import './css/todoBoard.css'
import './css/modal.css'
import './domHandler.js';
import {ProjectFactory, addProject, getProjects} from './project.js';
import {TodoFactory} from './todo.js';
import { compareAsc, format } from 'date-fns';
import {projectDisplayHandler, renderProjects} from './domHandler.js';


function createExamples(){
    const exProject = ProjectFactory("Example");
    const todo1 = TodoFactory("example1", "ex1", new Date(2014, 1, 11));
    const todo2 = TodoFactory("example2", "ex2", new Date(2014, 1, 11));
    exProject.addTodo(todo1);
    exProject.addTodo(todo2);

    const ex2Project = ProjectFactory("Example2");
    const todo12 = TodoFactory("2222222", "ex1", new Date(2014, 1, 11));
    const todo22 = TodoFactory("22222", "ex2", new Date(2014, 1, 11));
    ex2Project.addTodo(todo12);
    ex2Project.addTodo(todo22);
    addProject(ex2Project);
    addProject(exProject);

}


createExamples();
renderProjects(getProjects());

