angular
    .module('designApp')
    .controller('AppController', function ($scope, $mdSidenav) {
        $scope.toggle = function () {
            $mdSidenav('drawer').toggle();
        };
    });