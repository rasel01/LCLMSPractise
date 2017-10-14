module App {
    class Student {
        Name: string;
        Phone: string;

        getInfo(): string {
            return this.Name + "" + this.Phone;
        }
    }

    class StudentAddController {
        student: Student;
        info: string;

        constructor() {
            this.student = new Student();
        }

        Display(): void {
            this.info = this.student.getInfo();
        }
    }

    angular.module('app').controller("StudentAddController", StudentAddController);


    class StudentListController {
        studentList :  Student[];

        constructor() {
            this.studentList = [];
        }


    }

    angular.module('app').controller("StudentListController", StudentListController);
}