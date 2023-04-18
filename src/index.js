import './style.css';
import './domHandler.js';
import {Project} from './project.js';
import {TodoFactory} from './todo.js';
import { compareAsc, format } from 'date-fns';
import {displayProjectTodos} from './domHandler.js';


const exProject = Project("Example");
const todo1 = TodoFactory("example1", "ex1", new Date(2014, 1, 11));
const todo2 = TodoFactory("example2", "ex2", new Date(2014, 1, 11));
exProject.addTodo(todo1);
exProject.addTodo(todo2);
displayProjectTodos(exProject);