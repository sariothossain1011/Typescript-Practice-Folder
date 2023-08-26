// let users :object[];
// users = [];
// type User = {userName:string,userId:number}
var users;
users = [];
var user1;
user1 = { userName: "Sariot", userId: 100 };
users.push(user1);
var user2;
user2 = { userName: "hossain", userId: 101 };
users.push(user2);
var user3;
user3 = { userName: "khan", userId: 102 };
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
