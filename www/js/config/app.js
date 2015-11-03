const ngModule = angular.module('starter', [
  'ionic',
  require('../modules/profile/profile.module').name,
  require('../modules/login/login.module').name,
  require('../common/camera/camera.module.js').name
]);

require('./run')(ngModule);
