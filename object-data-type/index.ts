let users:object[];
users = [{userName:"khan",userId:101}]

let user1: {userName:string,userId:number} // userId?:number meaning optional
user1 = {userName:"Sariot",userId:100}


// console.log(user1)

users.push(user1)
// console.log(users)

for(const key in users){
    console.log(users[key]["userName"])
}