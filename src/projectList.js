function saveProjects(projectArray) {
    localStorage.setItem("projects", JSON.stringify(projectArray));
}

function getProjects() {
    if(localStorage.getItem("projects")){
        return(JSON.parse(localStorage.getItem("projects")));
    } else {
        return console.log("No Projects Found");
    }
}

export { saveProjects, getProjects };