import "./styles.css";
import { Project } from "./projectBuilder";
import { printToSidebar, buttonSelector } from "./sidebar";
import { createProjectModal } from "./buildProjectModal";
export { toDoFormItems } from "./createToDoModal";

function printProject() {
    printToSidebar(newProject());
}
// printProject()

// Button press creates modal
buttonSelector().addEventListener("click", () => {
    createProjectModal();
})

