import Project from "./project";
import "./styles.css";

let projects = [];

const newProjectCard = document.querySelector("#new-project-card");

newProjectCard.addEventListener("click", () => {
    const newProject = new Project({name: "test4"});
    newProject.addEntry(["Make title", "Short description of the todo entry", "01/20/25", "High"]);
    projects.push(newProject);
    console.log(projects);
});

