export default class Project {
    constructor(args) {
        this.name = `${args.name}`;
        this.toDoList = [];
        if(args.toDoList){
            for (const entry of args.toDoList){
                this.addEntry(entry);
            }
        }
    }

    addEntry = function(values) {
        const newEntry = [values[0], values[1], values[2], values[3]];
        this.toDoList.push(newEntry);
    }
}