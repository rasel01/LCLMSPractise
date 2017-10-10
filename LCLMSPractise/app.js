var app;
(function (app) {
    var Student = (function () {
        function Student() {
        }
        Student.prototype.GetInfo = function () {
            return "Student Name : " + this.Name + " and phone is " + this.phone;
        };
        return Student;
    }());
    var std = new Student();
    std.Name = "test";
    std.phone = "123";
    std.GetInfo();
    console.log(std.GetInfo());
})(app || (app = {}));
//# sourceMappingURL=app.js.map