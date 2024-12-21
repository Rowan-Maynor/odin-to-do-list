export default function createNewProjectOverlay() {
    //create container div
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";

    //create input container
    const inputContainer = document.createElement("div");
    inputContainer.id = "input-container";
    inputContainer.classList = "flex-container";

    //create header for input
    const inputHeader = document.createElement("p");
    inputHeader.id = "input-header";
    inputHeader.textContent = "Project Name"
    inputContainer.append(inputHeader);

    //create input for project name
    const input = document.createElement("input");
    input.id = "project-name-input"
    input.type = "text"
    inputContainer.append(input);

    //create button for input submission
    const submit = document.createElement("button");
    submit.id = "submit-name-btn";
    inputContainer.append(submit);

    //event listener for button should be added on 
    //index to have access to projects[]

    //attach module to overlay container
    overlayContainer.append(inputContainer);

    //attach entire overlay to body
    document.body.append(overlayContainer);
}