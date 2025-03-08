import "./styles.css";

// An array used for storing project objects and their child to do items
let projectArray = [];

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

        // Create project button is re-added
    })

    // Styles
    form.style.position = "absolute";
    form.style.left = "50%";
    form.style.right = "50%";
    form.style.top = "25%";

    // Prints to sidebar
}

// Select Add Project button
function addProjectButton() {
    const addProject = document.createElement("button");
    addProject.type = "button";
    addProject.textContent = "Create Project";
    // Appends to sidebar
    selectSidebar().appendChild(addProject);
    // Handles triggering of modal
    addProject.addEventListener("click", () => {
        // Create project button is removed
        addProjectModal();
    })
}

addProjectButton()

// Renders projects to sidebar
function renderToSidebar() {
    const sidebar = selectSidebar();
    sidebar.innerHTML = ""; // Clears before rendering
    addProjectButton();


    projectArray.forEach((project, index) => {
        let projectDiv = document.createElement("div");
        projectDiv.textContent = project.title + " " + project.description;
        // Append to sidebar
        sidebar.appendChild(projectDiv);
        // Modify further to make divs clickable
    });
}