// enum - store constants; duplicate value is not allowed here
// enum type : numeric, string, heterogenous
// numeric enum 01 
var RequestNumberType;
(function (RequestNumberType) {
    // ReadData,
    RequestNumberType[RequestNumberType["ReadData"] = 1] = "ReadData";
    RequestNumberType[RequestNumberType["DeleteData"] = 2] = "DeleteData";
    RequestNumberType[RequestNumberType["SaveData"] = 3] = "SaveData";
    RequestNumberType[RequestNumberType["GetData"] = 4] = "GetData";
})(RequestNumberType || (RequestNumberType = {}));
// console.log(RequestNumberType);
// string enum 
var RequestStringType;
(function (RequestStringType) {
    RequestStringType["ReadData"] = "READ_DATA";
    RequestStringType["DeleteData"] = "DELETE_DATA";
    RequestStringType["SaveData"] = "SAVE_DATA";
})(RequestStringType || (RequestStringType = {}));
// console.log(RequestStringType)
// console.log(RequestStringType.SaveData);
// console.log(RequestStringType["ReadData"]);
// heterogenous enum
var RequestStringNumberType;
(function (RequestStringNumberType) {
    RequestStringNumberType["ReadData"] = "READ_DATA";
    RequestStringNumberType["DeleteData"] = "DELETE_DATA";
    RequestStringNumberType["SaveData"] = "SAVE_DATA";
    RequestStringNumberType[RequestStringNumberType["id"] = 101] = "id";
})(RequestStringNumberType || (RequestStringNumberType = {}));
console.log(RequestStringNumberType);
console.log(RequestStringNumberType.SaveData);
console.log(RequestStringNumberType["id"]);
