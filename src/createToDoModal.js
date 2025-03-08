// Allows user to create to do items, within the parent project

// Adds button to main element of page
function parentDiv() {
    const parentDiv = document.querySelector("#mainBody");
    return parentDiv;
}

// Adds button to parent div
// To be enabled/called when a user selects or creates project
export function addToDoButton() {
    const toDoButton = document.createElement("button");
    toDoButton.type = "button";
    toDoButton.textContent = "+";
    // Adds to div
    parentDiv().appendChild(toDoButton);
}

// Create div to contain toDo modal
function toDoModalDiv() {
    const modalDiv = document.createElement("div");
    modalDiv.id = "toDoModalContainer";
    return modalDiv;
}

// Creates form for toDoDiv
function toDoFormCreator() {
    const toDoForm = document.createElement("form");
    toDoForm.id = "toDoForm";
    // Appends form to above container div
    toDoModalDiv().appendChild(toDoForm);
    return toDoForm;
}

// Append Form entries to form
export function toDoFormItems() {
    const parentForm = toDoFormCreator();

    // Manages title elements
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    parentForm.appendChild(titleLabel);
    parentForm.appendChild(titleInput);

    // Manages notes elements
    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes";
    const notesInput = document.createElement("input");
    parentForm.appendChild(notesLabel);
    parentForm.appendChild(notesInput);

    // Manages due date
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    const dueDateInput = document.createElement("input");
    parentForm.appendChild(dueDateLabel);
    parentForm.appendChild(dueDateInput);

    // Manages priority 
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority Level";
    const priorityInput = document.createElement("input");
    parentForm.appendChild(priorityLabel);
    parentForm.appendChild(priorityInput);
}

// Opens modal to enter project details after button press



// addToDoButton(); // Remove when done testing