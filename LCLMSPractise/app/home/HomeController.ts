module App {

    class HomeController {

        static $inject = ["StudentService"];
        constructor(studentservice: StudentService) {
            console.log("I am in home controller");
            this.now = new Date().toString();


            studentservice.get()
                .then(
                function (success) {
                    console.log(success);
                },
                function (error) {
                    console.log(error);
                    alert(error);
                }
            );

        }
        now: string;
    }

    angular.module('app').controller("HomeController", HomeController);
}