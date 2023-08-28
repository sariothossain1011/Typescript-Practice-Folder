interface IUser {
    id: number;
    name: string;
    age: number
}

// let users: {
//     id: number;
//     name: string;
//     age: number
// }[] = [];
let users: IUser[] = [];

// let user1: {
//     id: number;
//     name: string;
//     age: number
// } = {
//     id: 1,
//     name: "Sariot Hossain",
//     age: 20
// }
let user1: IUser = {
    id: 1,
    name: "Sariot Hossain",
    age: 20
}

// let user2: {
//     id: number;
//     name: string;
//     age: number
// } = {
//     id: 2,
//     name: "MD Fahad",
//     age: 23
// }
let user2:IUser = {
    id: 2,
    name: "MD Fahad",
    age: 23
}

users.push(user1);
users.push(user2);
// console.log(users)


const printUserData = (user: { id: number, name: string, age: number }) => {
    console.log(`Your id is:${user.id}.Name is ${user.name}.your age:${user.age}`)


}

users.forEach(user => printUserData(user))