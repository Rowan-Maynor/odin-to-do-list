import createNewProjectOverlay from "./createNewProjectOverlay";
import "./styles.css";

const newProjectCard = document.querySelector("#new-project-card");

newProjectCard.addEventListener("click", () => {
    createNewProjectOverlay();
});

