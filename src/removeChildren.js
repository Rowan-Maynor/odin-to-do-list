export default function removeChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}