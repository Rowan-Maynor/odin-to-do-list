import Project from "./project";
import "./styles.css";

const testJSON = '{"name": "test"}';
const testData = JSON.parse(testJSON);

const test = new Project(testData);
const test2 = new Project({name: "test2", toDoList: ["Test2", "Test3"]})

console.log(test);

