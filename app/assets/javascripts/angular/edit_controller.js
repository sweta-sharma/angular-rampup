var rampup = angular.module('rampup');

rampup.controller('editController', function($stateParams, $state, Users){
        var self = this;
        var id = $stateParams.id;

        self.get = function (id) {
            Users.getUser(id)
                .then(function (user) {
                    self.user = user;
                });
        };

        self.get(id);

        self.save = function () {
            Users.updateUser(id, self.user)
                .then(function () {
                    $state.go("basic");
                });
        };

    }
);
