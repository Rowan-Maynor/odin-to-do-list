import { getProjects, saveProjects } from "./projectList";
import renderProjects from "./renderProjects";

export default function createNewTaskOverlay(id) {
    const projectId = id;
    //create container div
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";

    //create input container
    const taskInputContainer = document.createElement("div");
    taskInputContainer.id = "task-input-container";
    taskInputContainer.classList = "flex-container";

    //create input fields
    createTextInput("Title", taskInputContainer);
    createTextArea("Description", taskInputContainer);
    createTextInput("Due Date", taskInputContainer);
    createTextInput("Priority", taskInputContainer);

    //create button for input submission
    const submit = document.createElement("button");
    submit.id = "submit-task-btn";
    submit.classList = "submit-btn";
    submit.textContent = "Submit";
    taskInputContainer.append(submit);

    //add click event for submit button
    submit.addEventListener("click", ()=>{
        const title = document.querySelector("#task-title-input");
        const description = document.querySelector("#task-description-input");
        const dueDate = document.querySelector("#task-due-date-input");
        const priority = document.querySelector("#task-priority-input");

        const values = [title.value, description.value, dueDate.value, priority.value];

        let projects = getProjects();

        projects[projectId].toDoList.push(values);

        saveProjects(projects);
        overlayContainer.remove();
        renderProjects();
    })

    //attach module to overlay container
    overlayContainer.append(taskInputContainer);

    //attach entire overlay to body
    document.body.append(overlayContainer);
}

function createTextInput(value, parent){
    let valueLower = value.toLowerCase();
    const noSpace = valueLower.replaceAll(" ", "-");
    const input = document.createElement("input");
    input.id = `task-${noSpace}-input`;
    input.type = "text";
    input.placeholder = `${value}`;
    parent.append(input);    
}

function createTextArea(value, parent){
    let valueLower = value.toLowerCase();
    const noSpace = valueLower.replaceAll(" ", "-");
    const input = document.createElement("textarea");
    input.id = `task-${noSpace}-input`;
    input.rows = "8";
    input.cols = "20";
    input.placeholder = `${value}`;
    parent.append(input);  
}