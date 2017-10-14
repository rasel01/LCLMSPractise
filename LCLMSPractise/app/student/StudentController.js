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
    var StudentAddController = (function () {
        function StudentAddController() {
            this.student = new Student();
        }
        StudentAddController.prototype.Display = function () {
            this.info = this.student.getInfo();
        };
        return StudentAddController;
    }());
    angular.module('app').controller("StudentAddController", StudentAddController);
    var StudentListController = (function () {
        function StudentListController() {
            this.studentList = [];
        }
        return StudentListController;
    }());
    angular.module('app').controller("StudentListController", StudentListController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map