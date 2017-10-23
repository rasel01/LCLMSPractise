var App;
(function (App) {
    var StudentService = (function () {
        // this constructor is public so no need get and set method here 
        //we can call it from any controller, just make class export.
        function StudentService(http) {
            // As like static in C# intiate only one time 
            //Service will intiate for one time 
            this.students = [];
            console.info("Intiating", this.students);
        }
        return StudentService;
    }());
    StudentService.$inject = ["$http"];
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map