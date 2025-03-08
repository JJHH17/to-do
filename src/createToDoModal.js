// Allows user to create to do items, within the parent project

// Adds button to main element of page
function parentDiv() {
    const parentDiv = document.querySelector("#mainBody");
    return parentDiv;
}

// Create div to contain toDo modal
function toDoModalDiv() {
    const modalDiv = document.createElement("div");
    modalDiv.id = "toDoModalContainer";
    parentDiv().appendChild(modalDiv);

    // Styles div
    modalDiv.style.position = "absolute";
    modalDiv.style.right = "50%";
    modalDiv.style.left = "50%";
    modalDiv.style.top = "25%";
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

    // Manages submit button
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.type = "button";
    parentForm.appendChild(submit);

    // Handling submit button logic, creates to do items

    return parentForm;
}

// Opens modal to enter project details after button press


// Adds button to parent div
// To be enabled/called when a user selects or creates project
export function toDoButton() {
    const toDoButton = document.createElement("button");
    toDoButton.type = "button";
    toDoButton.textContent = "+";
    // Adds to div
    parentDiv().appendChild(toDoButton);

    // Handles button click
    toDoButton.addEventListener("click", () => {
        toDoFormItems();
    })
    return toDoButton;
}
