import createNewProjectOverlay from "./createNewProjectOverlay";
import Project from "./project";
import renderProjects from "./renderProjects";
import "./styles.css";

let projects = [];
renderProjects(projects);

const newProjectCard = document.querySelector("#new-project-card");

newProjectCard.addEventListener("click", () => {
    const newProject = new Project({name: "Project"});
    for(let i = 0; i < 15; i++){
    newProject.addEntry(["Entry title", "Short description of the todo entry", "01/20/25", "High"]);
    };
    projects.push(newProject);
    renderProjects(projects);
    console.log(projects);

    //generate new project overaly
    createNewProjectOverlay();

    //take the input values and feed it into a new project (onclick submit)
});

