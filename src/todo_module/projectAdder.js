/**
 * Function that receives a project object and adds it to the
 * projects list, while saving it's title and todo array.
 */
export default function addProject(project){
    const sideBar = document.querySelector('.side-bar');
    const defaultProject = document.createElement('div');
    defaultProject.todoArray = project.todoArray;
    defaultProject.innerHTML = project.title;
    defaultProject.id = project.title;
    defaultProject.classList.add('projects-list');
    sideBar.appendChild(defaultProject);
}