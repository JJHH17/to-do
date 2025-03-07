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

// Creates form for user to populate
function formCreate() {
    // Creates form
    const modalForm = document.createElement("form");

    // Creates labels
    // Project name label
    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Project Name:";
    modalForm.appendChild(projectNameLabel);

    // Project Description label
    const projectDescLabel = document.createElement("label");
    projectDescLabel.textContent = "Project Description:";
    modalForm.appendChild(projectDescLabel);

    // Creates input
    // Project Name input
    const projectNameInput = document.createElement("input");
    modalForm.appendChild(projectNameInput);

    // Project Description Input
    const projectDescInput = document.createElement("input");
    modalForm.appendChild(projectDescInput);

    // Creates button
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Create";
    modalForm.appendChild(submitButton);
    // Appends to modal div
    return modalForm;
}

// Adds form to div, create project modal
export function createProjectModal() {
    // Creates DIV
    const container = modalDiv();
    // Creates form
    const form = formCreate();
    // Appends form to div
    container.appendChild(form);
}   


// Creates modal based on above functions, to be then used on "Add project" button press