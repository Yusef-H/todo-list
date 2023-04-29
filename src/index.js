import './css/headerSidebar.css';
import './css/todoBoard.css'
import './domHandler.js';
import {Project} from './project.js';
import {TodoFactory} from './todo.js';
import { compareAsc, format } from 'date-fns';
import {projectDisplayHandler} from './domHandler.js';


const exProject = Project("Example");
const todo1 = TodoFactory("example1", "ex1", new Date(2014, 1, 11));
const todo2 = TodoFactory("example2", "ex2", new Date(2014, 1, 11));
exProject.addTodo(todo1);
exProject.addTodo(todo2);

const ex2Project = Project("Example2");
const todo12 = TodoFactory("2222222", "ex1", new Date(2014, 1, 11));
const todo22 = TodoFactory("22222", "ex2", new Date(2014, 1, 11));
ex2Project.addTodo(todo12);
ex2Project.addTodo(todo22);

let projects = [ex2Project, exProject];
projects.forEach((project) => {
    projectDisplayHandler(project);
})
