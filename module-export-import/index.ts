// import { age, name } from "./studentInfo"; // original name 
import { age as a, name as n } from "./studentInfo"; // change default name 
import * as Student from "./studentInfo" // get import value in single line 



function DisplayStudent():void{
    console.log(`Your name is ${Student.name} and age is ${Student.age}`)

}
DisplayStudent()