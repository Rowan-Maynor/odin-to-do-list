import createToDoEntry from "./toDoEntry";

export default class Project {
    constructor(args) {
        this.name = `${args.name}`;
        this.toDoList = [];
    }

    addEntry = function(values) {
        const newEntry = createToDoEntry(values[0], values[1], values[2], values[3]);
        this.toDoList.push(newEntry);
    }
}