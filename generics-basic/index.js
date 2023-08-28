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
var printUserInfo = function (userId, userAge) {
    console.log("user id :".concat(userId, ",Age is :").concat(userAge));
};
printUserInfo("101", 20);
