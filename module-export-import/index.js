"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = require("./studentInfo"); // get import value in single line 
function DisplayStudent() {
    console.log("Your name is ".concat(Student.name, " and age is ").concat(Student.age));
}
DisplayStudent();
