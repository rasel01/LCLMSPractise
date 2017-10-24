var App;
(function (App) {
    var HomeController = (function () {
        function HomeController(studentservice) {
            console.log("I am in home controller");
            this.now = new Date().toString();
            studentservice.get()
                .then(function (success) {
                console.log(success);
            }, function (error) {
                console.log(error);
                alert(error);
            });
        }
        return HomeController;
    }());
    HomeController.$inject = ["StudentService"];
    angular.module('app').controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map