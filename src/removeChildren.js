export default function removeChildren(parent){
    while(parent.lastChild) {
        //need if statement so make sure that the create new project isnt removed
        if (parent.firstChild.id != "new-project-card"){
            parent.removeChild(parent.firstChild);
        } else {
            return
        }
    }
}