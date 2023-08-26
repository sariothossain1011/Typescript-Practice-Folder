// built in data type : number, string, boolean, void, undefined, null 
//01 ---> number, string, boolean 
var userID;
var firstName;
var lastName;
var fullName;
var isActivated;
userID = 100;
firstName = "Sariot";
lastName = " Hossain";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("User ID : ".concat(userID));
console.log("Full Name : ".concat(fullName));
console.log("isActivated : ".concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.slice(0, 5));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userID.toLowerCase()) // error --- number is not convert lower/upper case!
//02 ---> void
function display() {
    console.log("I am Full Stack Developer");
}
display();
