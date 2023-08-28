

// function printUserInfo(userId:string | number | boolean | object){
//     console.log(`user id :${userId}`)
// }
// printUserInfo("101")
// printUserInfo(32423)
// printUserInfo(true)
// printUserInfo({id:101})

//multiple parameter in generic type 
// function printUserInfo<X,Y>(userId:X,userAge:Y){
//     console.log(`user id :${userId},Age is :${userAge}`)
// }
const  printUserInfo =<X,Y>(userId:X,userAge:Y)=>{
    console.log(`user id :${userId},Age is :${userAge}`)
}

printUserInfo("101",20)
