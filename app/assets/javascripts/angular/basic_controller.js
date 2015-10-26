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

        self.delete = function (user) {
            var index = self.users.indexOf(user);
            self.users.splice(index, 1);
            Users.deleteUser(user.id)
                .then(function (response) {
                    return;
                });
        };

    }

);
