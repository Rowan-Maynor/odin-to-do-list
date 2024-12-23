import { getProjects, saveProjects } from "./projectList";
import Project from "./project";
import renderProjects from "./renderProjects";

export default function createNewProjectOverlay() {
    //add class to prevent scrolling while over is open
    document.body.classList = "no-scroll";

    //create container div
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";

    //create input container
    const projectInputContainer = document.createElement("div");
    projectInputContainer.id = "project-input-container";
    projectInputContainer.classList = "flex-container";

    //create input for project name
    const input = document.createElement("input");
    input.id = "project-name-input";
    input.type = "text";
    input.placeholder = "Project Name";
    projectInputContainer.append(input);

    //create button for input submission
    const submit = document.createElement("button");
    submit.id = "submit-name-btn";
    submit.classList = "submit-btn";
    submit.textContent = "Submit";
    projectInputContainer.append(submit);

    submit.addEventListener("click", ()=>{
        let projects = []
        if (getProjects()){
            projects = getProjects();
        }
        const newProject = new Project({name: `${input.value}`});
        projects.push(newProject);
        saveProjects(projects);
        
        overlayContainer.remove();

        //remove no scroll
        document.body.classList = "";

        renderProjects();
    })

    //attach module to overlay container
    overlayContainer.append(projectInputContainer);

    //attach entire overlay to body
    document.body.append(overlayContainer);
}