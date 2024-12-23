export default function createNewTaskOverlay() {
    //create container div
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";

    //create input container
    const taskInputContainer = document.createElement("div");
    taskInputContainer.id = "task-input-container";
    taskInputContainer.classList = "flex-container";

    //create input for project name
    createInput("");
}

function createInput(value){
    const input = document.createElement("input");
    input.id = `task-${value}-input`;
    input.type = "text";
    input.placeholder = `${value}`;
    projectInputContainer.append(input);    
}