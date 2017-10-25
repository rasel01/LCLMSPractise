module App {

   

    export class Student {
        id: string;
        name: string;
        phone: string;

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
        studentList: Student[];
        studentservice: StudentService;

        static $inject = ["StudentService"];
        constructor(studentservice: StudentService) {
            this.studentservice = studentservice;
            let self = this;
            self.studentList = [];
            let success = function(response) {
                self.studentList = response.data;
                console.log(self.studentList);
            };
            let error = function(errorResponse) {
                alert(errorResponse);
            }

            
            this.studentservice.get().then(success,error);
        }


    }

    angular.module('app').controller("StudentListController", StudentListController);
}