'use strict';

const ngModule = angular.module('camera', []);

ngModule.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.template.html'
        },
        'passwordReset': {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.passwordReset.html'
        }
      }
    })

    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/profile');
});

module.exports = ngModule;
