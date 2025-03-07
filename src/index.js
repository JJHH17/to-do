import "./styles.css";
import { Project, newProject } from "./projectBuilder";
import { printToSidebar, buttonSelector } from "./sidebar";
import { createProjectModal } from "./buildProjectModal";

function printProject() {
    printToSidebar(newProject());
}
// printProject()

// Button press creates modal
buttonSelector().addEventListener("click", () => {
    createProjectModal();
})