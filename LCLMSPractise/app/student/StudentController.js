var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentRequestModel = (function () {
        function StudentRequestModel() {
        }
        return StudentRequestModel;
    }());
    App.StudentRequestModel = StudentRequestModel;
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
            console.log("StudentList Controller Found");
            this.studentservice = studentservice;
            var self = this;
            self.studentList = [];
            self.searchRequest = new StudentRequestModel();
            self.searchRequest.Page = 1;
            var success = function (response) {
                self.studentList = response.data;
                console.log(self.studentList);
            };
            var error = function (errorResponse) {
                alert(errorResponse);
            };
            //  this.studentservice.get().then(success, error);
            this.studentservice.search(self.searchRequest).then(success, error);
        }
        StudentListController.prototype.search = function () {
            var self = this;
            //this.studentservice.students.push(this.student);
            var success = function (SuccessResponse) {
                console.log(SuccessResponse);
                self.studentList = SuccessResponse.data;
            };
            var error = function (ErrorResponse) {
                console.log(ErrorResponse);
            };
            this.studentservice.search(self.searchRequest).then(success, error);
        };
        StudentListController.prototype.sort = function (poperty) {
            var self = this;
            self.searchRequest.OrderBy = poperty;
            self.searchRequest.IsAcesnding = !self.searchRequest.IsAcesnding;
            self.search();
        };
        StudentListController.prototype.previous = function () {
            var self = this;
            if (self.searchRequest.Page > 1) {
                self.searchRequest.Page = self.searchRequest.Page - 1;
                this.search();
            }
        };
        StudentListController.prototype.next = function () {
            var self = this;
            self.searchRequest.Page = self.searchRequest.Page + 1;
            this.search();
        };
        return StudentListController;
    }());
    StudentListController.$inject = ["StudentService"];
    angular.module('app').controller("StudentListController", StudentListController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map