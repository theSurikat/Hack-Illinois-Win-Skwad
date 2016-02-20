var covalent = angular.module('covalent', ['chart.js', 'ngRoute']);

covalent.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/main.php',
        controller: 'MainController'
      }).otherwise({
        redirectTo: '/main'
      });
  }]);

covalent.controller('MainController', function($scope) {
  
});
