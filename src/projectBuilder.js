// Responsible for building the project Objects
// Project then has multiple toDo items within it

export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.toDos = []; // Stores an array of to do children objects
    }
    
    addToDoItem(item, notes, dueDate, priority) {
        const newToDo = newToDoItem(item, notes, dueDate, priority);
        this.toDos.push(newToDo) // Pushes into array when created
    }
}

// User is able to create a project here
export function newProject() {
    // let projectName = prompt("Please enter a project name: ");
    // let projectDescription = prompt("Please enter a project description");

    let newProject = new Project(projectName, projectDescription);
    return newProject;
}

