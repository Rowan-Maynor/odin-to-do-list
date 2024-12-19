import removeChildren from "./removeChildren.js"

export default function renderProjects(array) {
    if(array == []){
        return
    }

    const projectContainer = document.querySelector("#project-container");
    removeChildren(projectContainer);
    let i = 0;

    for (const project of array) {
        //create div for project card
        const projectCard = createProjectCard(i);

        //create H1 for object name
        const projectName = createProjectName(i, project.name);
        projectCard.append(projectName);

        //append new card to container
        projectContainer.prepend(projectCard);
        //iterate i
        i++
    }
}

function createProjectCard(i) {
    const projectCard = document.createElement("div");
    projectCard.id = `project-card-${i}`;
    projectCard.classList = "project-card";

    return projectCard;
}

function createProjectName(i, name) {
    const projectName = document.createElement("h1");
    projectName.id = `project-name-${i}`;
    projectName.classList = "project-name";
    projectName.textContent = name;

    return projectName;
}