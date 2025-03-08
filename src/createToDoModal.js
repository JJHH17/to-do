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

addToDoButton(); // Remove when done testing