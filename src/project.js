function Project(projectName){
    let numOfTodos = 0;
    let todoList = [];

    function addTodo(todo){
        todoList.push(todo);
    }

    return {
        projectName,
        numOfTodos,
        todoList,
        addTodo
    }
}

export {Project};