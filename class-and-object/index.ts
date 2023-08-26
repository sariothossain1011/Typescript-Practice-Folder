
class User{
    // properties, methods, constructor
     userName: string ;
     age:number;

    constructor(userName:string,age:number){
        this.userName = userName;
        this.age = age;
    }

    display():void{
        console.log(`Your name is : ${this.userName}. Your age is : ${this.age}`)
    }
}

const user1 = new User("soma",10)
user1.display()

const user2 = new User("khan",20)
user2.display()
