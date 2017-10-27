module App {

    class HomeController {

        static $inject = ["StudentService"];
        constructor(studentservice: StudentService) {
            console.log("I am in home controller");
            this.now = new Date().toString();



        }
        now: string;
    }

    angular.module('app').controller("HomeController", HomeController);
}