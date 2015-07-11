(function () {
  "use strict";

  var module = angular.module("birukApp", ["ngRoute"]);

  module.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.tmpl.html',
        controller: 'experienceController',
        controllerAs: 'experience'
      },
      "home");

    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact.tmpl.html'
      },
      "contact");

    $routeProvider.otherwise({redirectTo: '/'});
    
  });

  module.controller("experienceController", function () {
    var experience = this;
    var transitionYears = 1;
    var graduationYear = 2006;
    experience.years = (new Date()).getFullYear() - graduationYear - transitionYears;
  })
})();