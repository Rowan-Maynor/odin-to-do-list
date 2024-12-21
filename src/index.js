import createNewProjectOverlay from "./createNewProjectOverlay";
import renderProjects from "./renderProjects";
import "./styles.css";

const newProjectCard = document.querySelector("#new-project-card");
renderProjects();

newProjectCard.addEventListener("click", () => {
    createNewProjectOverlay();
});

