var users;
users = [{ userName: "khan", userId: 101 }];
var user1; // userId?:number meaning optional
user1 = { userName: "Sariot", userId: 100 };
// console.log(user1)
users.push(user1);
// console.log(users)
for (var key in users) {
    console.log(users[key]["userName"]);
}
