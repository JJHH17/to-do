import "./styles.css";

// An array used for storing project objects and their child to do items
let projectArray = [];
let activeProjectIndex = null; // Allows us to dynamically display projects

// Selects title container div
function titleContainerSelect() {
    const titleContain = document.querySelector("#titleContainer");
    return titleContain;
}

// This is where we will display our to do items
function toDoContainer() {
    const toDoDisplay = document.querySelector("#mainBody");
    return toDoDisplay;
}

// A function used for creating projects and pushing them into array
function createProject(title, description) {
    const project = { title, description, toDo: [] };
    projectArray.push(project);
    // Render to sidebar when function is created
}

// Selects main container of page
function mainContainer() {
    const mainContainer = document.querySelector("#pageContainer");
    return mainContainer;
}

// Select side bar div
function selectSidebar() {
    const sidebar = document.querySelector("#sidebar");
    return sidebar;
}

// Creates modal for creating a new project
function addProjectModal() {
    const parentContainer = mainContainer();

    // Form stores modal, appends to container
    const form = document.createElement("form");
    parentContainer.appendChild(form);

    // Creates "create project" label and input
    const projectTitle = document.createElement("label");
    projectTitle.textContent = "Project Title";
    const projectTitleInput = document.createElement("input");
    form.appendChild(projectTitle);
    form.appendChild(projectTitleInput);

    // Creates description label and input
    const projectDesc = document.createElement("label");
    projectDesc.textContent = "Project Description";
    const projectDescInput = document.createElement("input");
    form.appendChild(projectDesc);
    form.appendChild(projectDescInput);

    // Submit button creation
    const submitProject = document.createElement("button");
    submitProject.type = "button";
    submitProject.textContent = "Create";
    form.appendChild(submitProject);

    // Submit button logic, feeds into project creation array
    submitProject.addEventListener("click", () => {
        // Creates project and pushes to array
        createProject(projectTitleInput.value, projectDescInput.value);
        renderToSidebar();
        // Modal is removed
        form.remove();
        // Create project button is re-added
        addProjectButton();
    })

    // Styles
    form.style.position = "absolute";
    form.style.left = "50%";
    form.style.right = "50%";
    form.style.top = "25%";
}

// Responsible for modal that allows user to create project
function createProjectModal() {

    // Parent div
    const parentDiv = titleContainerSelect();
    // Creates Button
    const addToDo = document.createElement("button");
    addToDo.type = "button";
    addToDo.textContent = "Add Item";

    // Appends to page
    parentDiv.appendChild(addToDo);

    return addToDo;
}

// Select Add Project button
function addProjectButton() {
    const addProject = document.createElement("button");
    addProject.type = "button";
    addProject.textContent = "Create Project";

    // Adds styling to button
    addProject.style.display = "block";
    addProject.style.margin = "auto";

    // Appends to sidebar
    titleContainerSelect().appendChild(addProject);
    // Handles triggering of modal
    addProject.addEventListener("click", () => {
        // Create project button is removed
        addProject.remove();
        addProjectModal();
    })
}

addProjectButton() // Initializes button

// Renders projects to sidebar
function renderToSidebar() {
    const sidebar = selectSidebar();
    sidebar.innerHTML = ""; // Clears before rendering

    projectArray.forEach((project, index) => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("projectHolder");
        projectDiv.textContent = `${project.title} - ${project.description}`;

        // Allows divs to be clickable, expands to main section of page
        projectDiv.addEventListener("click", () => {
            loadProject(index);
        });

        // Append to sidebar
        sidebar.appendChild(projectDiv);
        // Modify further to make divs clickable
    });
}

// Responsible for loading project when div is clicked
function loadProject(index) {
    activeProjectIndex = index; // Dynamically updates active project
    const main = toDoContainer(); // Loads into main area of page
    main.innerHTML = ""; // Clears content before loading

    // Displays project title
    const projectTitle = document.createElement("p");
    projectTitle.textContent = projectArray[index].title;
    main.appendChild(projectTitle);

    // Displays project description
    const projectDescription = document.createElement("p");
    projectDescription.textContent = projectArray[index].description;
    main.appendChild(projectTitle);

    // Displays to do entries when they're created
    const toDoItems = document.createElement("div");
    toDoItems.id = "toDoList";

    projectArray[index].toDo.forEach(todo => {
        let toDoDiv = document.createElement("div");
        toDoDiv.textContent = `Completed? ${todo.completed} Title: ${todo.title} Notes: ${todo.toDoNotes}
        Due Date: ${todo.dueDate} Priority: ${todo.priority}`;
        toDoItems.appendChild(toDoDiv);
    });

    main.appendChild(toDoItems);
    renderToDoItems() // Calls below function
}

// Responsible for adding to do items
function renderToDoItems() {
    const main = toDoContainer();
    const createToDo = createProjectModal()

    // Handles is completed value, can be seperated into seperate function later
    let isCompletedValue = false;

    // Button click creates project
    createToDo.addEventListener("click", () => {

        // Removes button on click
        createToDo.remove();

        // Creates to do title
        const toDoTitleLabel = document.createElement("label");
        toDoTitleLabel.innerText = "Task";
        const toDoTitle = document.createElement("input");    

        // Creates to do notes
        const toDoNotesLabel = document.createElement("label");
        toDoNotesLabel.innerText = "Notes";
        const toDoNotes = document.createElement("input");

        // Creates to do due date
        const toDoDateLabel = document.createElement("label");
        toDoDateLabel.innerText = "Due Date";
        const dueDate = document.createElement("input");

        // Creates priority handler
        const priorityLabel = document.createElement("label");
        priorityLabel.innerText = "Priority";
        const priority = document.createElement("input");

        // Adds "completed" check box
        const isComplete = document.createElement("label");
        isComplete.innerText = "Completed";
        const isCompleteInput = document.createElement("input");
        isCompleteInput.type = "checkbox";

        // Handles is completed button logic
        isCompleteInput.addEventListener("change", () => {
            isCompletedValue = isCompleteInput.checked;
        });

        // Creates button to submit to do entry
        const addToDoButton = document.createElement("button");
        addToDoButton.type = "button";
        addToDoButton.innerText = "+"

        // Handles submit button
        addToDoButton.addEventListener("click", () => {
            if (activeProjectIndex !== null && toDoTitle.value.trim() !== "") {
                projectArray[activeProjectIndex].toDo.push({
                    completed: isCompletedValue, 
                    title: toDoTitle.value.trim(), 
                    toDoNotes: toDoNotes.value.trim(), 
                    dueDate: dueDate.value.trim(), 
                    priority: priority.value.trim()});
                loadProject(activeProjectIndex); // Refreshes the project viewer 
            }
    })
    main.appendChild(isComplete);
    main.appendChild(isCompleteInput);
    main.appendChild(toDoTitleLabel);
    main.appendChild(toDoTitle);
    main.appendChild(toDoNotesLabel);
    main.appendChild(toDoNotes);
    main.appendChild(toDoDateLabel);
    main.appendChild(dueDate);
    main.appendChild(priorityLabel);
    main.appendChild(priority);
    main.appendChild(addToDoButton);
    });
}