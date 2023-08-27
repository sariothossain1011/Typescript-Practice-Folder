var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(technology, institute, curriculum) {
        this.technology = technology;
        this.institute = institute;
        this.curriculum = curriculum;
    }
    User.prototype.Display = function () {
        console.log("Technology : ".concat(this.technology, ". Institute : ").concat(this.institute, ". Curriculum : ").concat(this.curriculum));
    };
    return User;
}());
var user = new User("Computer", "Cox-ploy", 15);
user.Display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, roll, registration, technology, institute, curriculum) {
        var _this = _super.call(this, technology, institute, curriculum) || this;
        _this.name = name;
        _this.roll = roll;
        _this.registration = registration;
        return _this;
    }
    Student.prototype.Display = function () {
        console.log("Name : ".concat(this.name, ". Roll : ").concat(this.roll, ". Registration : ").concat(this.registration, ". Technology : ").concat(this.technology, ". Institute : ").concat(this.institute, ". Curriculum : ").concat(this.curriculum));
    };
    return Student;
}(User));
var student = new Student("Sariot Hossain", 12925, 1502081734, "Computer", "Cox-ploy", 15);
student.Display();
