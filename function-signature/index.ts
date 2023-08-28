let userInfo1:()=> void ;
let userInfo2:(name:string)=> void ;
let userInfo3:(name:string,age:number)=> void ;
userInfo1 =()=>{
    console.log('Sariot hossain is 20 years old')
}
// userInfo1();


userInfo2 =(name:string)=>{
    console.log(`${name} is 20 years old`)
}
userInfo2("Sariot Hossain");


userInfo3 =(name:string,age:number)=>{
    console.log(`${name} is ${age} years old`)
}
userInfo3("Sariot Hossain",20);