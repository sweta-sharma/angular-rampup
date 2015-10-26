var rampup = angular.module('rampup');

rampup.service('records', function($http){
    var self = this;
    self.all = function () {
        return $http.get("http://jsonplaceholder.typicode.com/posts/");
    };
});
