module app {
     class Student {
        Name: string;
        phone: string;


        GetInfo(): string {
            return "Student Name : " + this.Name + " and phone is " + this.phone;
        }

    }

     class StudentController {

         getStudentInfo(): void {

             let std = new Student();
             std.Name = "test";
             std.phone = "123";

             console.log(std.GetInfo());
         }
     }

     var app = angular.module('app', []);
     angular.module('app').controller("StudentController", StudentController);


}