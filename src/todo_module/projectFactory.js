/**
 * Project Factory: 
 * Each project holds a todo array which represents the tasks inside
 * the project, and the project's title which is displayed on 
 * the sidebar.
 */
const projectFactory = (title) => {
    var todoArray = [];
    return {
        title,
        todoArray
    }
}
export default projectFactory;