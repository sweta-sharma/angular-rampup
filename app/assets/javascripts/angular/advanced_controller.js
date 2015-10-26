var rampup = angular.module('rampup');

rampup.controller('advancedController', function(records){

        var self = this;

        self.fetch = function(){
            records.all()
                .then(function(response) {
                    self.records = response.data;
                    console.log(self.records);
                });
        };

    }
);
