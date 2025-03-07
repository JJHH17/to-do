import { Project } from "./projectBuilder";
import { printToSidebar } from "./sidebar";



// Responsible for modal that appears when user creates a project

// Selects main page container to be used to build modal
function containerSelector() {
    const pageContainer = document.querySelector("#pageContainer");
    return pageContainer;
}

// Creates modal div
function modalDiv() {
    const newDiv = document.createElement("div");
    // populates it on DOM
    newDiv.id = "projectModal";
    containerSelector().appendChild(newDiv);
    return newDiv;
}

// Deletes modal div
function deleteModalDiv() {
    const container = document.querySelector("#projectModal");
    container.remove();
    return container;
}

// Creates form for user to populate
function formCreate() {
    // Creates form
    const modalForm = document.createElement("form");

    // Creates labels
    // Project name label
    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Project Name:";
    modalForm.appendChild(projectNameLabel);

    // Project Name input
    const projectNameInput = document.createElement("input");
    projectNameInput.id = "projectNameInput";
    modalForm.appendChild(projectNameInput);

    // Project Description label
    const projectDescLabel = document.createElement("label");
    projectDescLabel.textContent = "Project Description:";
    modalForm.appendChild(projectDescLabel);

    // Project Description Input
    const projectDescInput = document.createElement("input");
    projectDescInput.id = "projectDescInput";
    modalForm.appendChild(projectDescInput);

    // Creates button
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Create";
    modalForm.appendChild(submitButton);

    // Handle submit button
    // MOVE TO ITS OWN FUNCTION AND CALL, MAKE DECISION AT END OF PROJECT
    submitButton.addEventListener("click", () => {
        // Creates new project 
        const newProject = new Project(projectNameInput, projectDescInput);
        // Removes modal once pressed
        deleteModalDiv();
        // Print to display
        printToSidebar(newProject);
    })
    
    return modalForm;
}

// Modal styling function
function modalStyling(modal) {
    // Positions to absolute 
    modal.style.position = "absolute";
    // Centers modal
    modal.style.right = "50%";
    modal.style.left = "50%";
    modal.style.top = "35%";
    // Adds border

    // Will later align the individual items

    return modal;
}

// Adds form to div, create project modal
export function createProjectModal() {
    // Creates DIV
    const container = modalDiv();
    // Creates form
    const form = formCreate();
    // Add styling function here
    modalStyling(container);
    // Appends form to div
    container.appendChild(form);
}   

// Creates modal based on above functions, to be then used on "Add project" button press