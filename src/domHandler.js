import { format} from 'date-fns'
const sidebarButton = document.querySelector('.sidebar-collapse-button');
const sidebar = document.querySelector('.sidebar');
const todoListContainer = document.querySelector('.todo-list-container');
const projectsContainer = document.querySelector('.sidebar-user-projects');

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-show');
});

function projectDisplayHandler(project){
    const projectButton = document.createElement('button');
    projectButton.innerHTML = project.projectName;
    projectButton.addEventListener('click', () => {
        clearTodoListContainer();
        displayProjectTodos(project);
    })
    projectsContainer.appendChild(projectButton);

}


function displayProjectTodos(project){
    
    project.todoList.forEach(todo => {
        displayTodo(todo);
    });
}

function displayTodo(todo){
    const todoContainer = document.createElement('div');
    const leftDiv = document.createElement('div');
    
    const rightDiv = document.createElement('div');

    const checkBox = document.createElement("input");
    const title = document.createElement("h3");
    const date = document.createElement("h3");
    

    checkBox.setAttribute("type", "checkbox");
    leftDiv.appendChild(checkBox);

    title.innerHTML = todo.title;
    leftDiv.appendChild(title);

    
    date.innerHTML = format(todo.dueDate, "yyyy/MM/dd");
    rightDiv.appendChild(date);

    todoContainer.appendChild(leftDiv);
    todoContainer.appendChild(rightDiv);


    todoContainer.classList.add('todo-container');
    todoListContainer.appendChild(todoContainer);
}

function clearTodoListContainer(){
    while(todoListContainer.hasChildNodes()){
        todoListContainer.removeChild(todoListContainer.firstChild);
    }
    
}


export {
    displayProjectTodos,
    projectDisplayHandler
};




