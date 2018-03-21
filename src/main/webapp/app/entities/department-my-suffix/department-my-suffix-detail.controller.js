(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationMonolithicApp')
        .controller('DepartmentMySuffixDetailController', DepartmentMySuffixDetailController);

    DepartmentMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Department', 'Location', 'Employee'];

    function DepartmentMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Department, Location, Employee) {
        var vm = this;

        vm.department = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterSampleApplicationMonolithicApp:departmentUpdate', function(event, result) {
            vm.department = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();