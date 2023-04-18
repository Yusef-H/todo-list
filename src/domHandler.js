
const sidebarButton = document.querySelector('.sidebar-collapse-button');
const sidebar = document.querySelector('.sidebar');
const todosListContainer = document.querySelector('.todos-list');

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-show');
});


function displayProjectTodos(project){
    
    project.todoList.forEach(todo => {
        displayTodo(todo);
    });
}

function displayTodo(todo){
    const todoContainer = document.createElement('div');
    todosListContainer.appendChild(todoContainer);
}


export {
    displayProjectTodos,
    displayTodo
};




