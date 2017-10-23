module App {
    export class StudentService{
        // angular service add:

        http: angular.IHttpService;
        students: Student[];
        static $inject = ["$http"];
        // this constructor is public so no need get and set method here 
        //we can call it from any controller, just make class export.
        constructor(http: angular.IHttpService) {

            // As like static in C# intiate only one time 
            //Service will intiate for one time 
            this.students = [];
            console.info("Intiating", this.students);

        }
    
    }

    angular.module('app').service("StudentService", StudentService)
}