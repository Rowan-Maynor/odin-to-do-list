import { getProjects, saveProjects } from "./projectList";
import Project from "./project";
import renderProjects from "./renderProjects";

export default function createNewProjectOverlay() {
    //create container div
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";

    //create input container
    const inputContainer = document.createElement("div");
    inputContainer.id = "input-container";
    inputContainer.classList = "flex-container";

    //create input for project name
    const input = document.createElement("input");
    input.id = "project-name-input"
    input.type = "text"
    input.placeholder = "Project Name"
    inputContainer.append(input);

    //create button for input submission
    const submit = document.createElement("button");
    submit.id = "submit-name-btn";
    submit.textContent = "Submit";
    inputContainer.append(submit);

    submit.addEventListener("click", ()=>{
        let projects = []
        if (getProjects()){
            projects = getProjects();
        }
        const newProject = new Project({name: `${input.value}`});
        projects.push(newProject);
        saveProjects(projects);
        overlayContainer.remove();
        renderProjects();
    })

    //attach module to overlay container
    overlayContainer.append(inputContainer);

    //attach entire overlay to body
    document.body.append(overlayContainer);
}