var rampup = angular.module('rampup');

rampup.service('recordsService', function($http){
    var self = this;

    self.all = function () {
        return $http.get("http://jsonplaceholder.typicode.com/posts/").then(
            onRecordsFetchSuccess,
            onRecordsFetchError
        );
    };

    function onRecordsFetchSuccess(response){
        console.log("Total Records fetched:",response.data.length);
        return response;
    }

    function onRecordsFetchError(response){
        console.error('Error fetching records...');
        console.log('status', response.status);
        console.log('message', response.statusText);
        return $q.reject(response);
    }
});
