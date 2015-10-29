var rampup = angular.module('rampup');

rampup.factory('Users', function($http,$q){
    var factory = {},
        urlBase = '/users';

    factory.all = function() {
         return $http.get(urlBase).then(
             onUsersGetSuccess,
            onUsersGetError
        );
    }

    factory.getUser = function(id) {
        return $http.get(urlBase+'/'+id).then(
            onUserGetSucess,
            onUserGetError
        );
    }

    factory.addUser = function(user) {
        return $http.post(urlBase, user).then(
            onUserAddSuccess,
            onUserAddError
        );
    }

    factory.deleteUser = function(id){
        return $http.delete(urlBase+'/'+id).then(
            onUserDeleteSuccess,
            onUserDeleteError
        );
    }

    factory.updateUser = function(id,user){
        return $http.put(urlBase+'/'+id, user).then(
            onUserUpdateSuccess,
            onUserUpdateError
        );
    }

    function onUsersGetSuccess (response){
        console.log("Total Users fetched:",response.data.length);
        return response;
    }

    function onUsersGetError(response) {
        console.error('Error fetching users...');
        console.log('status', response.status);
        console.log('message', response.statusText);
        return $q.reject(response);
    }

    function onUserGetSucess (response){
        console.log("User found with id:",response.data.id);
        return response;
    }

    function onUserGetError(response) {
        console.error('Error fetching user...');
        console.log('status', response.status);
        console.log('message', response.statusText);
        return $q.reject(response);
    }

    function onUserAddSuccess (response){
        console.log("User added with id:",response.data.id);
        return response;
    }

    function onUserAddError(response) {
        console.error('Error adding user...');
        console.log('status', response.status);
        console.log('message', response.statusText);
        return $q.reject(response);
    }

    function onUserDeleteSuccess (response){
        console.log("User deleted with id:",response.data.id);
        return response;
    }

    function onUserDeleteError(response) {
        console.error('Error deleting user...');
        console.log('status', response.status);
        console.log('message', response.statusText);
        return $q.reject(response);
    }

    function onUserUpdateSuccess (response){
        console.log("User updated with id:",response.data.id);
        return response;
    }

    function onUserUpdateError(response) {
        console.error('Error updating user...');
        console.log('status', response.status);
        console.log('message', response.statusText);
        return $q.reject(response);
    }

    return factory;
});
