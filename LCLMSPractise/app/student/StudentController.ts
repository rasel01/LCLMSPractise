module App {
    export class Student {
        Name: string;
        Phone: string;
        getInfo(): string {
            return this.Name + "" + this.Phone;
        }
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

        Display(): void {
            this.info = this.student.getInfo();
        }



        Add(): void {
            this.studentservice.students.push(this.student);
            this.student = new Student();
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
            this.studentList = this.studentservice.students;
            console.log("This is student list page", this.studentList);
        }


    }

    angular.module('app').controller("StudentListController", StudentListController);
}