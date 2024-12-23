import createNewTaskOverlay from "./createNewTaskOverlay";
import { getProjects } from "./projectList";

export default function renderProjects() {
    const projects = getProjects();
    if (!projects) {
        return
    }

    const projectContainer = document.querySelector("#project-container");
    removeChildren(projectContainer);
    //used to create project id's
    let i = 0;
    //used to create entry id's
    let j = 0;

    for (const project of projects) {
        //create div for project card
        const projectCard = createProjectCard(i);

        //create H1 for object name
        const projectName = createProjectName(i, project.name);
        projectCard.append(projectName);

        //create to do entries
        generateEntries(i, j, project.toDoList, projectCard);

        //create new entries button
        const newEntryButton = createNewEntry(i);
        projectCard.append(newEntryButton);

        //append new card to container
        projectContainer.prepend(projectCard);
        i++;
    }
}

function removeChildren(parent){
    while(parent.lastChild) {
        //need if statement so make sure that the create new project isnt removed
        if (parent.firstChild.id != "new-project-card"){
            parent.removeChild(parent.firstChild);
        } else {
            return
        }
    }
}

function createProjectCard(i) {
    const projectCard = document.createElement("div");
    projectCard.id = `project-card-${i}`;
    projectCard.classList = "flex-container project-card";

    return projectCard;
}

function createProjectName(i, name) {
    const projectName = document.createElement("h1");
    projectName.id = `project-name-${i}`;
    projectName.classList = "project-name";
    projectName.textContent = name;

    return projectName;
}

function generateEntries(i, j, array, parent) {
    for (const entry of array) {
        //create div to contain entry information
        const newEntry = createEntryDiv(i, j);

        //create name for entry
        const entryName = createEntryName(j, entry[0]);
        newEntry.append(entryName);

        //create due date for entry
        const entryDueDate = createEntryDueDate(j, entry[2]);
        newEntry.append(entryDueDate);

        //create priority for entry
        const entryPriority = createEntryPriority(j, entry[3]);
        newEntry.append(entryPriority);

        //create description for entry
        const entryDescription = createEntryDescription(j, entry[1]);
        newEntry.append(entryDescription);

        parent.append(newEntry);
        j++;
    }
}

function createEntryDiv(i, j) {
    const entryDiv = document.createElement("div");
    entryDiv.id = `project-${i}-entry-${j}`
    entryDiv.classList = "grid-container entry-container"

    return entryDiv;
}

function createEntryName(j, name) {
    const entryName = document.createElement("p");
    entryName.id = `entry-${j}-name`;
    entryName.classList = "entry-name";
    entryName.textContent = name;

    return entryName;
}

function createEntryDueDate(j, date) {
    const entryDueDate = document.createElement("p");
    entryDueDate.id = `entry-${j}-date`;
    entryDueDate.classList = "entry-date";
    entryDueDate.textContent = date;

    return entryDueDate;
}

function createEntryPriority(j, priority) {
    const entryPriority = document.createElement("p");
    entryPriority.id = `entry-${j}-priority`;
    entryPriority.classList = "entry-priority";
    entryPriority.textContent = priority;

    return entryPriority;
}

function createEntryDescription(j, description) {
    const entryDescription = document.createElement("p");
    entryDescription.id = `entry-${j}-description`;
    entryDescription.classList = "entry-description";
    entryDescription.textContent = description;

    return entryDescription;
}

function createNewEntry(i) {
    //create newEntryButton
    const newEntryButton = document.createElement("button");
    newEntryButton.id = `new-entry-${i}`;
    newEntryButton.classList = "new-entry-button";

    //create divs for plus icon
    const newEntryPlusHorizontal = document.createElement("div");
    newEntryPlusHorizontal.id = "new-entry-plus-horizontal";
    newEntryButton.append(newEntryPlusHorizontal);
    const newEntryPlusVertical = document.createElement("div");
    newEntryPlusVertical.id = "new-entry-plus-vertical";
    newEntryButton.append(newEntryPlusVertical);

    //create click event for button
    newEntryButton.addEventListener("click", ()=>{
        createNewTaskOverlay();
    })

    //attach to parent
    return newEntryButton;
}