// let users: {
//     id: number;
//     name: string;
//     age: number
// }[] = [];
var users = [];
// let user1: {
//     id: number;
//     name: string;
//     age: number
// } = {
//     id: 1,
//     name: "Sariot Hossain",
//     age: 20
// }
var user1 = {
    id: 1,
    name: "Sariot Hossain",
    age: 20
};
// let user2: {
//     id: number;
//     name: string;
//     age: number
// } = {
//     id: 2,
//     name: "MD Fahad",
//     age: 23
// }
var user2 = {
    id: 2,
    name: "MD Fahad",
    age: 23
};
users.push(user1);
users.push(user2);
// console.log(users)
var printUserData = function (user) {
    console.log("Your id is:".concat(user.id, ".Name is ").concat(user.name, ".your age:").concat(user.age));
};
users.forEach(function (user) { return printUserData(user); });
