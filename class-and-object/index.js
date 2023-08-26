var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Your name is : ".concat(this.userName, ". Your age is : ").concat(this.age));
    };
    return User;
}());
var user1 = new User("soma", 10);
user1.display();
var user2 = new User("khan", 20);
user2.display();
