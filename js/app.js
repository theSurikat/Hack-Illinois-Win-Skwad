var covalent = angular.module('covalent', ['ngRoute']);

covalent.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'index.html',
        controller: 'MainController'
      }).otherwise({
        redirectTo: '/main'
      });
  }]);

covalent.controller('MainController', function($scope) {

});
