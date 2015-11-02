angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    //$scope.loginData = {};

    // Create the login modal that we will use later
    //$ionicModal.fromTemplateUrl('templates/login.html', {
    //    scope: $scope
    //}).then(function(modal) {
    //    $scope.modal = modal;
    //});

    // Triggered in the login modal to close it
    //$scope.closeLogin = function() {
    //    $scope.modal.hide();
    //};

    // Open the login modal
    //$scope.login = function() {
    //    $scope.modal.show();
    //};

    // Perform the login action when the user submits the login form
    //$scope.doLogin = function() {
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
    //    $timeout(function() {
    //        $scope.closeLogin();
    //    }, 1000);
    //};
})

.controller('LoginCtrl', function($scope) {
    console.log('LoginCtrl');
    $scope.loginData = {};

    //debug
    var successErrorToggle = true;

    $scope.resetPassword = function(valid) {
      console.log(valid, 'Resetting pw', $scope.loginData);
    };

    $scope.doLogin = function(valid) {
      console.log(valid, 'Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {

        if(successErrorToggle) {
          console.log('Logged in');
          $scope.loginError = false;
        } else {
          $scope.loginError = "The email and password don't match.";
        }
        successErrorToggle = !successErrorToggle;

      }, 1000);
    };
})

.controller('ProfileCtrl', function($scope) {
    console.log('ProfileCtrl');
    $scope.signout = function() {
      console.log('sign out logic here');
    };
})

.directive('ethiCamera', function($cordovaCamera, $cordovaDialogs) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '../templates/camera.html',
      link: function ($scope, element, attrs) {

        $scope.takePicture = function() {
          var options = {
            quality : 100,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            correctOrientation: false,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            cameraDirection: 1
          };
          console.log(options);

          $cordovaCamera.getPicture(options).then(
            (imageData) => {
              $scope.imgURI = "url(data:image/jpeg;base64," + imageData + ')';
            },
            (err) => {
              if(err == 'Camera cancelled.') { return; }
              $cordovaDialogs.alert(err, 'Error', 'Okay');
            }
          );
        }
      }
    }
});
