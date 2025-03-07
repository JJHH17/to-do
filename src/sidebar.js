// Responsible for sidebar displaying behaviour, as well as 
// Button to create a new project

function sidebarSelector() {
    const sidebar = document.querySelector("#sidebar");
    return sidebar;
}

export function buttonSelector() {
    const createProject = document.querySelector("#addProject");
    return createProject;
}

// Create new div in sidebar to print to
function appendSidebarDiv() {
    const newDiv = document.createElement("div");
    return newDiv;
} 

// Displays an item to sidebar
export function printToSidebar(project) {
    const newdiv = appendSidebarDiv(); // creates the new div
    newdiv.textContent = "Project: " + project.title + " " + "Description:" + " " + project.description;
    sidebarSelector().appendChild(newdiv);
}