// tsc index.ts -->  convert index.js --> node index.js


//---01  javascript
let firstName = "Sariot Hossain";
console.log(firstName);



//---02   javascript
function addNumber(num1,num2) {
    console.log(num1 + num2);
}
addNumber(20, "20");


//---03   typescript
function addNumberTs(num1: number, num2: number) {
    console.log(num1 + num2);
}
addNumberTs(20, 30);