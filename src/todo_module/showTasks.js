/**
 * Function that loops through the project's todo tasks and displays
 * them on the todo-board.
 */
const showProjectTasks = (project) => { 
    const todoBoard = document.querySelector('.todo-board');
    var todoArray = Array.from(project.todoArray);
    for(let i=0; i<todoArray.length; i++){
        console.log(todoArray[0]);
        todoBoard.appendChild(todoArray[i]);
    }
}
export default showProjectTasks;