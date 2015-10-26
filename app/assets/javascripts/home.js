var rampup = angular.module('rampup',['ui.router','templates']);

rampup.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('basic');

    $stateProvider

        .state('basic', {
            url: '/basic',
            controller: 'basicController as basic',
            templateUrl: 'basic.html'
        })

        .state('basic.new', {
            url: '/new',
            controller: 'newController as editUser',
            templateUrl: 'form.html'
        })

        .state('basic.edit', {
            url: '/edit/:id',
            controller: 'editController as editUser',
            templateUrl: 'form.html'
        })

        .state('advanced', {
            url: '/advanced',
            controller: 'advancedController as advanced',
            templateUrl: 'advanced.html'
        });

});

rampup.factory('Users', ['$http',function($http){
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
}]);

rampup.controller('basicController', function(Users){

        var self = this;

        self.getUsers = function () {
            Users.all()
                .success(function (users) {
                    self.users = users;
                });
        };

        self.getUsers();

        self.delete = function (id) {
            Users.deleteUser(id)
                .success(function (response) {
                    //self.getUsers();
                });
        };

    }

);

rampup.controller('newController', function($state, Users){
        var editUser = this;

        editUser.save = function () {
            Users.addUser(editUser.user)
                .success(function () {
                    $state.go("basic");
                    return;
                });
        };

    }
);

rampup.controller('editController', function($stateParams, $state, Users){
        var editUser = this;
        var id = $stateParams.id;

        editUser.get = function (id) {
            Users.getUser(id)
                .success(function (user) {
                    editUser.user = user;
                });
        };

        editUser.get(id);

        editUser.save = function () {
            Users.updateUser(id, editUser.user)
                .success(function () {
                    $state.go("basic");
                });
        };

    }
);

rampup.controller('advancedController', function($http){

        var self = this;

        self.fetch = function(){
            $http.get("http://jsonplaceholder.typicode.com/posts/")
                .success(function(records) {
                    self.records = records;
                    console.log(self.records);
                });
        };

    }
);
