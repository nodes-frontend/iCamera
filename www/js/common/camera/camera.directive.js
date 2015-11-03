'use strict';

const ngModule = angular.module('starter', []);

ngModule.module('camera')
        .directive('Camera', Camera);

/* @ngInject */
class Camera {

  constructor() {
    this.template = require('./camera.template.html');
    this.restrict = 'AEC';
  }

  link($scope, element, attrs, $cordovaCamera, $cordovaDialogs) {
    console.log("ethiCamera link function");
    const options = {
      quality           : 100,
      destinationType   : Camera.DestinationType.DATA_URL,
      sourceType        : Camera.PictureSourceType.CAMERA,
      allowEdit         : true,
      encodingType      : Camera.EncodingType.JPEG,
      targetWidth       : 300,
      targetHeight      : 300,
      correctOrientation: false,
      popoverOptions    : CameraPopoverOptions,
      saveToPhotoAlbum  : false,
      cameraDirection   : 1
    };

    $scope.takePicture = function() {

      $cordovaCamera.getPicture(options)
        .then((imageData) => {
          $scope.imgURI = "url(data:image/jpeg;base64," + imageData + ')';
        }, (err) => {
          if(err == 'Camera cancelled.') {
            return;
          }
          $cordovaDialogs.alert(err, 'Error', 'Okay');
        });
    }
  }
}

module.exports = ngModule;
