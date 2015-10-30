var rampup = angular.module('rampup');

rampup.controller('basicController', function($state,$scope,Flash, Users){

        var self = this;
        $scope.FormVisibility = false;
        self.user = {};

        angular.extend(self, {
            getUsers: getUsers,
            delete: deleteUser
        });

        (function initialize() {
            getUsers();
        })();

        function getUsers() {
            Users.all()
                .then(onGetUsers,
                onGetUsersError
            );
        }

        function deleteUser(user){
            var index = self.users.indexOf(user);
            deleteFromUserArray(index);
            Users.deleteUser(user.id)
                .then(onDeleteUser,
                onDeleteUserError
            );
        }

        // private methods
        function deleteFromUserArray(index) {
            self.users.splice(index, 1);
        }

        function onGetUsers(response) {
            self.users = response.data;
            return;
        }

        function onGetUsersError(response) {
            Flash.create('danger', 'Error Fetching Users')
            return;
        }

        function onDeleteUser(response) {
            Flash.create('success', "Deleted user with id: "+response.data.id);
            if(self.user.id){
                $state.go("basic.new");
            }
            return;
        }

        function onDeleteUserError(response) {
            Flash.create('danger', "Cannot delete user", 'custom-class');
            return;
        }

    }

);
