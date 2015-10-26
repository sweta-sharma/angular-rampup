var rampup = angular.module('rampup');

rampup.controller('newController', function($state, Users){
        var self = this;

        self.save = function () {
            Users.addUser(self.user)
                .then(function () {
                    $state.go("basic");
                    return;
                });
        };

    }
);
