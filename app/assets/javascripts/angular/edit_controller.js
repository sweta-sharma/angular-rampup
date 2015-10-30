var rampup = angular.module('rampup');

rampup.controller('editController', function($scope,Flash,$stateParams, $state, Users){
        var self = this;
        var id = $stateParams.id;

        angular.extend(self, {
            get: get,
            save: save
        });

        (function initialize() {
            get();
            self.action = "Update"
        })();

        function get() {
            Users.getUser($stateParams.id)
                .then( onUserGet,
                onUserGetError
            );
        }

        function save() {
            Users.updateUser($stateParams.id, $scope.basic.user)
                .then(onUserUpdate,
                onUserUpdateError
            );
        }

        function onUserGet(response) {
            $scope.basic.user = response.data;
            return;
        }

        function onUserGetError(response) {
            Flash.create('danger', "Error fetching User with id:"+$stateParams.id);
            return;
        }

        function onUserUpdate(response) {
            Flash.create('success', 'User updated with id:'+$stateParams.id, 'custom-class');
            $scope.formVisibility = false;
            $scope.basic.user = {};
            $scope.basic.getUsers();
            $state.go("basic");
            return;
        }

        function onUserUpdateError(response) {
            Flash.create('danger', "Error updating User with id:"+$stateParams.id);
            Flash.pause();
            $scope.formVisibility = false;
            $scope.basic.getUsers();
            $state.go("basic");
            return;
        }

    }
);
