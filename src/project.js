export default class Project {
    constructor(args) {
        this.name = `${args.name}`;

        //Entry format
        //[title[0], description[1], dueDate[2], priority[3]]
        this.toDoList = [];
    }
}