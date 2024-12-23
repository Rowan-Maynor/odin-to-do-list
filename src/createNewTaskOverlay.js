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
    createInput("Title", taskInputContainer);
    createInput("Description", taskInputContainer);
    createInput("Due Date", taskInputContainer);
    createInput("Priority", taskInputContainer);

    //create button for input submission
    const submit = document.createElement("button");
    submit.id = "submit-task-btn";
    submit.classList = "submit-btn";
    submit.textContent = "Submit";
    taskInputContainer.append(submit);

    //attach module to overlay container
    overlayContainer.append(taskInputContainer);

    //attach entire overlay to body
    document.body.append(overlayContainer);
}

function createInput(value, parent){
    let valueLower = value.toLowerCase();
    const noSpace = valueLower.replaceAll(" ", "-");
    const input = document.createElement("input");
    input.id = `task-${noSpace}-input`;
    input.type = "text";
    input.placeholder = `${value}`;
    parent.append(input);    
}