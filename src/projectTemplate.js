export default class Project {
    constructor(args) {
        this.name = `${args.name}`;
        this.description = `${args.description}`
        this.dueDate = `${args.dueDate}`
        this.priority = `${args.priority}`
    }
}