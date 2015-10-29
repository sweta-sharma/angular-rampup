var rampup = angular.module('rampup');

rampup.controller('advancedController', function(recordsService){

        var self = this;

        var showUser = [];

        angular.extend(self, {
            fetch: fetch,
            showUser: showUser
        });

        function fetch(){
            recordsService.all()
                .then(onRecordsFetchSuccess,
                onRecordsFetchError
            );
        }

        function onRecordsFetchSuccess(response) {
            self.allRecords = response.data;
            setRecords();
        }

        function onRecordsFetchError(response) {
            Flash.create('danger', 'Error Fetching Users');
        }


        function setRecords() {
            var temp = self.allRecords.slice(0,self.allRecords.length),
                record;
            shuffleArray(temp);
            self.records = temp.slice(0,self.noOfRecords);
            self.records.sort(sortByProperty('userId'));
            for(index in self.records){
                record = self.records[index];
                showUser[record.userId]=true;
            }
            return;
        }

        function shuffleArray(temp){
            var j, x, i = temp.length;
            while(i){
                j = Math.floor(Math.random() * i);
                x = temp[--i];
                temp[i] = temp[j];
                temp[j] = x;
            }
            return temp;
        }

        function sortByProperty(property) {
            return function (x, y) {
                return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
            };
        };

    }
);
