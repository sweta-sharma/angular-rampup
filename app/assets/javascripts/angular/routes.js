var rampup = angular.module('rampup');

rampup.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('basic');

    var basic = {
        name: "basic",
        url: '/basic',
        controller: 'basicController as basic',
        templateUrl: 'basic.html'
    };

    var basic_new = {
        name: "basic.new",
        parent: "basic",
        url: '/new',
        controller: 'newController as editUser',
        templateUrl: 'form.html'
    };

    var basic_edit = {
        name: "basic.edit",
        parent: "basic",
        url: '/edit/:id',
        controller: 'editController as editUser',
        templateUrl: 'form.html'
    };

    var advanced = {
        name: "advanced",
        url: '/advanced',
        controller: 'advancedController as advanced',
        templateUrl: 'advanced.html'
    };

    $stateProvider
        .state(basic)
        .state(basic_new)
        .state(basic_edit)
        .state(advanced);

});
