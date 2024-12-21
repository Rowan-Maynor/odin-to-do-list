function saveProjects(projectArray) {
    localStorage.setItem("projects", projectArray);
}

function getProjects() {
    if(localStorage.getItem("projects")){
        return(localStorage.getItem("projects"));
    } else {
        return console.log("No Projects Found");
    }
}

export { saveProjects, getProjects };