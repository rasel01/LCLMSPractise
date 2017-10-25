var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentAddController = (function () {
        function StudentAddController(studentservice) {
            this.student = new Student();
            this.studentservice = studentservice;
        }
        //Display(): void {
        //    this.info = this.student.getInfo();
        //}
        StudentAddController.prototype.Add = function () {
            var self = this;
            //this.studentservice.students.push(this.student);
            var success = function (SuccessResponse) {
                console.log(SuccessResponse);
                self.Reset();
            };
            var error = function (ErrorResponse) {
                console.log(ErrorResponse);
            };
            this.studentservice.save(self.student).then(success, error);
            //this.student = new Student();
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
            var self = this;
            self.studentList = [];
            var success = function (response) {
                self.studentList = response.data;
                console.log(self.studentList);
            };
            var error = function (errorResponse) {
                alert(errorResponse);
            };
            this.studentservice.get().then(success, error);
        }
        return StudentListController;
    }());
    StudentListController.$inject = ["StudentService"];
    angular.module('app').controller("StudentListController", StudentListController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map