export default function clearBoard(){
    const todoBoard = document.querySelector('.todo-board');
    while(todoBoard.firstChild){
        todoBoard.removeChild(todoBoard.lastChild);
    }
}