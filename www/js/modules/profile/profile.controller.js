'use strict';

const ngModule = angular.module('starter', []);

ngModule.module('profile')
  .controller('Profile', Profile);

function Profile() {

  const vm = this;

  console.log('ProfileCtrl');
}

module.exports = ngModule;
