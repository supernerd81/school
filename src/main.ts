import {Student} from "./models/Student.ts";

function separator() {
    let returnValue:string = "";

    for(let i = 0; i < 30; i++) {
        returnValue = returnValue + "=";
    }

    return returnValue;
}

const student1: Student = { firstName: "Angela", lastName: "Merkel", age: 105, grades: [6, 3, "A", 4, 4] }
const student2: Student = { firstName: "Markus", lastName: "Söder", age: 145, grades: [6, 2, 6, 4, undefined, 3, 6] }
const student3: Student = { firstName: "Andreas", lastName: "Scheuer", age: 95, grades: [6, "B", "F", 5, 1, 4, "A"] }

const students: Student[] = [student1, student2, student3];

console.log(JSON.stringify(students));


for(let i = 0; i < students.length; i++) {
    console.log(" ");
    console.log(`${students[i].firstName} ${students[i].lastName} (${students[i].age})`);
    console.log(separator());
    console.log(`Grades: ${students[i].grades.map(value => value === undefined ? " *": " " + value )}`);
    console.log(" ");
}