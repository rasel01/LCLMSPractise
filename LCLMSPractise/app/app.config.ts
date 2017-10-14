
module App {
    var app = angular.module('app', ["ui.router"]);

    class Configuration {

        // configurater UI Router

        //stateProvider,urlRouterProvider

        static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor(stateProvider: angular.ui.IStateProvider, urlRouterProvider: angular.ui.IUrlRouterProvider) {

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


        //registration classs :




    }
    angular.module('app').config(Configuration);

}