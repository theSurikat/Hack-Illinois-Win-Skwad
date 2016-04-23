var covalent = angular.module('covalent', ['ngRoute']);

covalent.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/performance', {
        templateUrl: '../partials/performance.html',
        controller: 'PerformanceController'
      }).when('/partners', {
        templateUrl: '../partials/partners.html',
        controller: 'PartnersController'
      }).when('/profile', {
        templateUrl: '../partials/profile.html',
        controller: 'ProfileController'
      }).when('/connections', {
        templateUrl: '../partials/connections.html',
        controller: 'ConnectionsController'
      }).when('/explore', {
        templateUrl: '../partials/explore.html',
        controller: 'ExploreController'
      }).otherwise({
        redirectTo: '/performance'
      });
  }]);

covalent.controller('PartnersController', function($scope) {
  angular.element(document).ready(function () {
    console.log("Partners!");
  });
});

covalent.controller('ConnectionsController', function($scope) {
  angular.element(document).ready(function () {
    console.log("Connections!");
  });
});

covalent.controller('ProfileController', function($scope) {
  angular.element(document).ready(function () {
    console.log("Profile!");
  });
});

covalent.controller('PerformanceController', function($scope) {
  angular.element(document).ready(function () {
    console.log("Performance!");
  });
});

covalent.controller('ExploreController', function($scope) {
  angular.element(document).ready(function () {
    console.log("Explore!");
  });
});



// Other functions - Handles sidebar highlighting
$(document).ready(function() {
  $('.sidebar-button').on('click', function() {
    $('.sidebar-button').removeClass('active');
    $(this).addClass('active');
  });
});
