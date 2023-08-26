// single type array 

// let userName : string[];  // array declare rule--01
let userName: Array<string>; // array declare rule--02
userName = ["Sairot", "Hossain", "Sumon","Abrar"];

console.log(userName[1])


// multiple type array 

 let userId : (string | number)[]; 
userId = ["abc", "abcde", "abcd",50,40];
console.log(userId[4])

// array sort 
console.log(userName.sort())
console.log(userId.sort())
