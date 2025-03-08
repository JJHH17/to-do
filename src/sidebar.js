import { toDoButton } from "./createToDoModal";

// Responsible for sidebar displaying behaviour, as well as 
// Button to create a new project

function sidebarSelector() {
    const sidebar = document.querySelector("#sidebar");
    return sidebar;
}

function mainBodySelector() {
    const mainBody = document.querySelector("#mainBody");
    return mainBody;
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
    newdiv.textContent = "Project: " + project.title.value + " " + "Description:" + " " + project.description.value;
    sidebarSelector().appendChild(newdiv);

    // Makes the sidebar project div clickable, expands to main page
    newdiv.addEventListener("click", () => {
        // If clicked, the project details are displayed on main page container
        const mainBody = mainBodySelector();
        mainBody.textContent = project.title.value + project.description.value + project.toDos.value;

        // Allows user to add new to do entry on button click
        toDoButton();

        return mainBody;
    })
}