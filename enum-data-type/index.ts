// enum - store constants; duplicate value is not allowed here
// enum type : numeric, string, heterogenous



// numeric enum 01 
enum RequestNumberType {
    // ReadData,
    ReadData =1,
    DeleteData,
    SaveData,
    GetData,
}
// console.log(RequestNumberType);


// string enum 
enum RequestStringType {
    ReadData = "READ_DATA",
    DeleteData="DELETE_DATA",
    SaveData = "SAVE_DATA",

}
// console.log(RequestStringType)
// console.log(RequestStringType.SaveData);
// console.log(RequestStringType["ReadData"]);



// heterogenous enum
enum RequestStringNumberType {
    ReadData = "READ_DATA",
    DeleteData="DELETE_DATA",
    SaveData = "SAVE_DATA",
    id = 101,

}
console.log(RequestStringNumberType)
console.log(RequestStringNumberType.SaveData);
console.log(RequestStringNumberType["id"]);