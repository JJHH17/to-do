import "./styles.css";
import { Project } from "./projectBuilder";
import { printToSidebar, buttonSelector } from "./sidebar";
import { createProjectModal } from "./buildProjectModal";
import { addToDoButton } from "./createToDoModal";
import { toDoFormItems, toDoButton } from "./createToDoModal";

// Button press creates modal
buttonSelector().addEventListener("click", () => {
    createProjectModal();
})

