module App {



    export class Student {
        id: string;
        name: string;
        phone: string;

    }

    export class StudentRequestModel {
        name: string;
        phone: string;
        OrderBy: string;
        IsAcesnding: boolean;
        Page: number;
    }

    class StudentAddController {
        student: Student;
        info: string;
        studentservice: StudentService;
        static $inject = ["StudentService"];

        constructor(studentservice: StudentService) {
            this.student = new Student();
            this.studentservice = studentservice;
        }

        //Display(): void {
        //    this.info = this.student.getInfo();
        //}



        Add(): void {

            var self = this;

            //this.studentservice.students.push(this.student);

            let success = function (SuccessResponse) {
                console.log(SuccessResponse);
                self.Reset();

            };

            let error = function (ErrorResponse) {
                console.log(ErrorResponse);
            }

            this.studentservice.save(self.student).then(success, error);
            //this.student = new Student();
        }
        Reset(): void {
            this.student = new Student();
        }
    }

    angular.module('app').controller("StudentAddController", StudentAddController);


    class StudentListController {
        searchRequest: StudentRequestModel;
        studentList: Student[];
        studentservice: StudentService;

        static $inject = ["StudentService"];
        constructor(studentservice: StudentService) {
            console.log("StudentList Controller Found");
            this.studentservice = studentservice;
            let self = this;
            self.studentList = [];
            self.searchRequest = new StudentRequestModel();
            self.searchRequest.Page = 1;
            let success = function (response) {
                self.studentList = response.data;
                console.log(self.studentList);
            };
            let error = function (errorResponse) {
                alert(errorResponse);
            }


            //  this.studentservice.get().then(success, error);
            this.studentservice.search(self.searchRequest).then(success, error);
        }

        search() {
            var self = this;

            //this.studentservice.students.push(this.student);

            let success = function (SuccessResponse) {
                console.log(SuccessResponse);
                self.studentList = SuccessResponse.data;


            };

            let error = function (ErrorResponse) {
                console.log(ErrorResponse);
            }

            this.studentservice.search(self.searchRequest).then(success, error);
        }

        sort(poperty: string) {
            var self = this;
            self.searchRequest.OrderBy = poperty;
            self.searchRequest.IsAcesnding = !self.searchRequest.IsAcesnding;
            self.search();
        }
        previous() {
            var self = this;
            if (self.searchRequest.Page > 1) {
                self.searchRequest.Page = self.searchRequest.Page - 1;
                this.search();
            }
            
        }
        next() {
            var self = this;
            self.searchRequest.Page = self.searchRequest.Page + 1;
            this.search();
        }
    }

    angular.module('app').controller("StudentListController", StudentListController);
}