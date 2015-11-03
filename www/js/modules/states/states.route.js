'use strict';

const ngModule = angular.module('camera', []);

ngModule.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'www/js/modules/application/menu.template.html'
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'www/js/modules/login/login.template.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        }
      }
    })

    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'www/js/modules/profile/profile.template.html',
          controller: 'ProfileCtrl',
          controllerAs: 'profile'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/profile');
});

module.exports = ngModule;
