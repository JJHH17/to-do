// Responsible for building the project Objects

export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

// User is able to create a project here
export function newProject() {
    // let projectName = prompt("Please enter a project name: ");
    // let projectDescription = prompt("Please enter a project description");

    let newProject = new Project(projectName, projectDescription);
    return newProject;
}

