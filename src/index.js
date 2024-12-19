import Project from "./project";
import renderProjects from "./renderProjects";
import "./styles.css";

let projects = [];
renderProjects(projects);

const newProjectCard = document.querySelector("#new-project-card");

newProjectCard.addEventListener("click", () => {
    const newProject = new Project({name: "Project"});
    newProject.addEntry(["Entry title", "Short description of the todo entry", "01/20/25", "High"]);
    projects.push(newProject);
    renderProjects(projects);
    console.log(projects);
});

