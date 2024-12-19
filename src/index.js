import Project from "./project";
import "./styles.css";

const testJSON = '{"name": "test"}';
const testData = JSON.parse(testJSON);

const test = new Project(testData);
test.addEntry(["test", "test2", "test3", "test4"]);

console.log(test);
console.log(test.toDoList[0])

