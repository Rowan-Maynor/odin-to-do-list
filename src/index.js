import Project from "./project";
import "./styles.css";

let projects = [];

const newProjectCard = document.querySelector("#new-project-card");

newProjectCard.addEventListener("click", () => {
    const newProject = new Project({name: "test4"});
    projects.push(newProject);
    console.log(projects);
});

