var rampup = angular.module('rampup');

rampup.factory('Users', function($http){
    var factory = {},
        urlBase = '/users';

    factory.all = function() {
        return $http.get(urlBase);
    };

    factory.getUser = function(id) {
        return $http.get(urlBase+'/'+id)
    };

    factory.addUser = function(user) {
        return $http.post(urlBase, user);
    };

    factory.deleteUser = function(id){
        return $http.delete(urlBase+'/'+id)
    };

    factory.updateUser = function(id,user){
        return $http.put(urlBase+'/'+id, user)
    };

    return factory;
});
