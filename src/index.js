import "./styles.css";
import { Project, newProject } from "./projectBuilder";
import { printToSidebar } from "./sidebar";

function printProject() {
    console.log(newProject());
}
printProject()