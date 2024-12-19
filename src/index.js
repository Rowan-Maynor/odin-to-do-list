import Project from "./project";
import "./styles.css";

const testJSON = '{"name": "test"}';
const testData = JSON.parse(testJSON);

const test = new Project(testData);
test.addEntry(["test", "test2", "test3", "test4"]);

const testJSON2 = JSON.stringify(test);
const testData2 = JSON.parse(testJSON2);

console.log(testData2);

