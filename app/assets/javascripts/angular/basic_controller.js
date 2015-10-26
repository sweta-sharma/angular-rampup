var rampup = angular.module('rampup');

rampup.controller('basicController', function(Users){

        var self = this;

        self.getUsers = function () {
            Users.all()
                .then(function (response) {
                    self.users = response.data;
                });
        };

        self.getUsers();

        self.delete = function (id) {
            Users.deleteUser(id)
                .then(function (response) {
                    self.users.pop(response.data)
                });
        };

    }

);
