const projects = [];
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
    projects.push(project);
}

function getProjects(){
    return projects;
}

function getProjectByName(name){
    let projectToReturn;
    projects.forEach((project) => {
        if(project.projectName === name){
            projectToReturn = project;
        }
    })
    return projectToReturn;
}

function doesProjectNameExist(projectName){
    return projectNames.has(projectName);
}

export {ProjectFactory, 
        addProject, 
        getProjects,
        doesProjectNameExist,
        getProjectByName};