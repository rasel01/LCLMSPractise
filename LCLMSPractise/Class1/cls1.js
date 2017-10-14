var app;
(function (app_1) {
    var Student = (function () {
        function Student() {
        }
        Student.prototype.GetInfo = function () {
            return "Student Name : " + this.Name + " and phone is " + this.phone;
        };
        return Student;
    }());
    var StudentController = (function () {
        function StudentController() {
        }
        StudentController.prototype.getStudentInfo = function () {
            var std = new Student();
            std.Name = "test";
            std.phone = "123";
            console.log(std.GetInfo());
        };
        return StudentController;
    }());
    var app = angular.module('app', []);
    angular.module('app').controller("StudentController", StudentController);
})(app || (app = {}));
//# sourceMappingURL=cls1.js.map