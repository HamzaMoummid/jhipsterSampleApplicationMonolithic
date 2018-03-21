(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationMonolithicApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
