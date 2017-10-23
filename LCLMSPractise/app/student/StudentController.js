var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        Student.prototype.getInfo = function () {
            return this.Name + "" + this.Phone;
        };
        return Student;
    }());
    App.Student = Student;
    var StudentAddController = (function () {
        function StudentAddController(studentservice) {
            this.student = new Student();
            this.studentservice = studentservice;
        }
        StudentAddController.prototype.Display = function () {
            this.info = this.student.getInfo();
        };
        StudentAddController.prototype.Add = function () {
            this.studentservice.students.push(this.student);
            this.student = new Student();
        };
        StudentAddController.prototype.Reset = function () {
            this.student = new Student();
        };
        return StudentAddController;
    }());
    StudentAddController.$inject = ["StudentService"];
    angular.module('app').controller("StudentAddController", StudentAddController);
    var StudentListController = (function () {
        function StudentListController(studentservice) {
            this.studentservice = studentservice;
            this.studentList = this.studentservice.students;
            console.log("This is student list page", this.studentList);
        }
        return StudentListController;
    }());
    StudentListController.$inject = ["StudentService"];
    angular.module('app').controller("StudentListController", StudentListController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map