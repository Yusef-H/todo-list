import toDoFactory from "./todo_module/todoFactory";
import initialize from "./initial_module/initial";
import addTodo from "./todo_module/todoAdder";
import './style.css';
import './initial_module/initial.css';
import './todo_module/todoTasks.css';

initialize();
const todoExample = toDoFactory("Running", "Run for 5 KM daily", "None", 10);
addTodo(todoExample);

