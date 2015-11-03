module.exports = (ngModule) => ngModule.run(run);


let run = ($rootScope, $ionicPlatform, $cordovaPush) => {
  /*var iosConfig = {
   "badge": true,
   "sound": true,
   "alert": true
   };

   var androidConfig = {
   "senderID": "replace_with_sender_id"
   };*/

  $ionicPlatform.ready(function() {
    console.log('ionic ready');

    /*$cordovaPush.register(iosConfig).then(function(deviceToken) {
     // Success -- send deviceToken to server, and store for future use
     console.log("deviceToken: " + deviceToken);
     $http.post("http://server.co/", {user: "Bob", tokenID: deviceToken})
     }, function(err) {
     alert("Registration error: " + err)
     });*/

    /*$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
     //iOS
     if (notification.alert) {
     navigator.notification.alert(notification.alert);
     }

     if (notification.sound) {
     var snd = new Media(event.sound);
     snd.play();
     }

     if (notification.badge) {
     $cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
     // Success!
     }, function(err) {
     // An error occurred. Show a message to the user
     });
     }

     //Android
     switch(notification.event) {
     case 'registered':
     if (notification.regid.length > 0 ) {
     alert('registration ID = ' + notification.regid);
     }
     break;

     case 'message':
     // this is the actual push notification. its format depends on the data model from the push server
     alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
     break;

     case 'error':
     alert('GCM error = ' + notification.msg);
     break;

     default:
     alert('An unknown GCM event has occurred');
     break;
     }
     });*/

    // WARNING! dangerous to unregister (results in loss of tokenID)
    /*$cordovaPush.unregister(options).then(function(result) {
     // Success!
     }, function(err) {
     // Error
     });*/

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
};
