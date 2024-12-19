import Project from "./projectTemplate";
import "./styles.css";

const testJSON = '{"name": "test", "description": "test2"}';
const testData = JSON.parse(testJSON);

const test = new Project(testData);

console.log(test);

