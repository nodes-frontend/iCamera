'use strict';

const ngModule = angular.module('starter', []);

ngModule.module('login')
        .controller('Login', Login);

/* @ngInject */
function Login($timeout) {

  const vm = this;

  console.log('LoginCtrl');
  vm.loginData = {};

  //debug
  var successErrorToggle = true;

  vm.resetPassword = function(valid) {
    console.log(valid, 'Resetting pw', vm.loginData);
  };

  vm.signin = function(valid) {
    console.log(valid, 'Doing login', vm.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {

      if(successErrorToggle) {
        console.log('Logged in');
        vm.loginError = false;
      } else {
        vm.loginError = "The email and password don't match.";
      }
      successErrorToggle = !successErrorToggle;

    }, 1000);
  };
}

module.exports = ngModule;
