var App;
(function (App) {
    var StudentService = (function () {
        // this constructor is public so no need get and set method here 
        //we can call it from any controller, just make class export.
        function StudentService(http, q) {
            // As like static in C# intiate only one time 
            //Service will intiate for one time 
            this.students = [];
            this.http = http;
            this.q = q;
            //console.info("Intiating", this.students);
            // console.log(this.http);
        }
        //get(): angular.IPromise<any> {
        //    var self = this;
        //    var deffered = self.q.defer();
        //    var Sfunc = function (successResponse) {
        //        console.log(successResponse);
        //        deffered.resolve(successResponse);
        //    }
        //    var Efunc = function (errorResponse) {
        //        console.log(errorResponse);
        //        deffered.reject(errorResponse);
        //    }
        //   // self.http.get("http://localhost:50694/api/StudentQuery").then(Sfunc, Efunc);
        //    return deffered.promise;
        //}
        StudentService.prototype.save = function (student) {
            var self = this;
            var deffered = self.q.defer();
            var Sfunc = function (successResponse) {
                console.log(successResponse);
                deffered.resolve(successResponse);
            };
            var Efunc = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:50694/api/Student", student).then(Sfunc, Efunc);
            return deffered.promise;
        };
        StudentService.prototype.search = function (request) {
            var self = this;
            var deffered = self.q.defer();
            var Sfunc = function (successResponse) {
                console.log(successResponse);
                deffered.resolve(successResponse);
            };
            var Efunc = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:50694/api/StudentQuery", request).then(Sfunc, Efunc);
            return deffered.promise;
        };
        return StudentService;
    }());
    StudentService.$inject = ["$http", "$q"];
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map