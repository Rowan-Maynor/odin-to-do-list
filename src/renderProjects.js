export default function renderProjects(array) {
    if(array == []){
        return
    }

    const projectContainer = document.querySelector("#project-container");
    removeChildren(projectContainer);
    //used to create project id's
    let i = 0;
    //used to create entry id's
    let j = 0;

    for (const project of array) {
        //create div for project card
        const projectCard = createProjectCard(i);

        //create H1 for object name
        const projectName = createProjectName(i, project.name);
        projectCard.append(projectName);

        //create to do entries
        generateEntries(i, j, project.toDoList, projectCard);

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
        const newEntry = createToDoEntryDiv(i, j);

        //create name for entry
        const entryName = createEntryName(j, entry[0]);
        newEntry.append(entryName);

        //create due date for entry
        const entryDueDate = createEntryDueDate(j, entry[2]);
        newEntry.append(entryDueDate);

        //create priority for entry
        const entryPriority = createEntryPriority(j, entry[3]);
        newEntry.append(entryPriority);

        parent.append(newEntry);
        j++;
    }
}

function createToDoEntryDiv(i, j) {
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