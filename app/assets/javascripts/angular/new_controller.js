var rampup = angular.module('rampup');

rampup.controller('newController', function($scope,Flash,$state, Users){
        var self = this;

        angular.extend(self, {
            save: save
        });

        (function initialize (){
            $scope.basic.user = {};
            self.action = "Save"
        })();

        function save() {
            Users.addUser($scope.basic.user)
                .then(onAddUser,
                onAddUserError
            );
        }

        function onAddUser(response) {
            Flash.create('success', 'User added with id:'+response.data.id);
            $scope.formVisibility = false;
            $scope.basic.user = {};
            $scope.basic.getUsers();
            $state.go("basic");
            return;
        }

        function onAddUserError(response) {
            Flash.create('danger', "Error adding User");
            Flash.pause();
            $scope.formVisibility = false;
            $scope.basic.getUsers();
            $state.go("basic");
            return;
        }

    }
);
