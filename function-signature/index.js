var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log('Sariot hossain is 20 years old');
};
// userInfo1();
userInfo2 = function (name) {
    console.log("".concat(name, " is 20 years old"));
};
userInfo2("Sariot Hossain");
userInfo3 = function (name, age) {
    console.log("".concat(name, " is ").concat(age, " years old"));
};
userInfo3("Sariot Hossain", 20);
