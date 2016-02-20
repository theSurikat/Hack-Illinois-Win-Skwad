var covalent = angular.module('covalent', ['ngRoute']);

covalent.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: '../partials/profile.html',
        controller: 'MainController'
      }).when('/connections', {
        templateUrl: '../partials/connections.html',
        controller: 'ConnectionsController'
      }).otherwise({
        redirectTo: '/main'
      });
  }]);

covalent.controller('MainController', function($scope) {
  angular.element(document).ready(function () {
    console.log("test");
  });
});

covalent.controller('ConnectionsController', function($scope) {
  angular.element(document).ready(function () {
    console.log("test");
  });
});
