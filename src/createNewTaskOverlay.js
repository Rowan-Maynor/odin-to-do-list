export default function createNewTaskOverlay() {
    //create container div
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";

    //create input container
    const taskInputContainer = document.createElement("div");
    taskInputContainer.id = "task-input-container";
    taskInputContainer.classList = "flex-container";

    //create input fields
    createInput("Title");
    createInput("description");
    createInput("Due Date");
    createInput("Priority");
}

function createInput(value){
    const valueLower = value.toLowerCase();
    const input = document.createElement("input");
    input.id = `task-${valueLower}-input`;
    input.type = "text";
    input.placeholder = `${value}`;
    projectInputContainer.append(input);    
}