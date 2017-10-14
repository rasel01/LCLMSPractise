var App;
(function (App) {
    var app = angular.module('app', ["ui.router"]);
    var Configuration = (function () {
        function Configuration(stateProvider, urlRouterProvider) {
            urlRouterProvider.otherwise("/");
            stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>"
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partials/home/home.tpl.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
                .state("root.student-add", {
                url: "/student-add",
                templateUrl: "partials/student/student-add.tpl.html",
                controller: "StudentAddController",
                controllerAs: "vm"
            })
                .state("root.student-list", {
                url: "/student-list",
                templateUrl: "partials/student/student-list.tpl.html",
                controller: "StudentListController",
                controllerAs: "vm"
            });
        }
        return Configuration;
    }());
    // configurater UI Router
    //stateProvider,urlRouterProvider
    Configuration.$inject = ["$stateProvider", "$urlRouterProvider"];
    angular.module('app').config(Configuration);
})(App || (App = {}));
//# sourceMappingURL=app.config.js.map