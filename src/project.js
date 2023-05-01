const projects = new Set();
const projectNames = new Set();

function ProjectFactory(projectName){
    let numOfTodos = 0;
    let todoList = [];

    function addTodo(todo){
        todoList.push(todo);
    }

    projectNames.add(projectName);

    return {
        projectName,
        numOfTodos,
        todoList,
        addTodo
    }
}

function addProject(project){
    projects.add(project);
}

function getProjects(){
    return projects;
}

function doesProjectNameExist(projectName){
    return projectNames.has(projectName);
}

export {ProjectFactory, 
        addProject, 
        getProjects,
        doesProjectNameExist};