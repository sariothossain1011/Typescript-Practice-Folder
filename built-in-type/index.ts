// built in data type : number, string, boolean, void, undefined, null 


//01 ---> number, string, boolean 
let userID: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: true;

userID = 100;
firstName = "Sariot"
lastName = " Hossain"
isActivated = true;

fullName = firstName.concat(lastName)

console.log(`User ID : ${userID}`);
console.log(`Full Name : ${fullName}`);
console.log(`isActivated : ${isActivated}`);

console.log(fullName.split(" "));
console.log(fullName.slice(0, 5));
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
// console.log(userID.toLowerCase()) // error --- number is not convert lower/upper case!


//02 ---> void

function display(): void {
    console.log("I am Full Stack Developer");
}
display();