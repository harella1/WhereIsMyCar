angular.module('app.controllers', [])
  
.controller('whereILeftMyCarCtrl', function($scope) {

})
   
.controller('driveToCtrl', function($scope) {

})
   
.controller('saveLocationCtrl', function ($scope, Camera) {

 
    $scope.show = function () {
        var tapEnabled = true; //enable tap take picture
        var dragEnabled = false; //enable preview box drag across the screen
        var toBack = false; //send preview box to the back of the webview
        var e = document.getElementById('camprev');
        var rect = { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight };
        cordova.plugins.camerapreview.startCamera(rect, "back", tapEnabled, dragEnabled, toBack);
        cordova.plugins.camerapreview.show();
    };

    $scope.$on('$destroy', function () {
        // Do your cleanup here or call a function that does
        cordova.plugins.camerapreview.stopCamera();
    });

    cordova.plugins.camerapreview.setOnPictureTakenHandler(function (result) {
        cordova.plugins.camerapreview.hide();
        //document.getElementById('picprev').src = result[0];//originalPicturePath;
        document.getElementById('picprev').src = result[1];//previewPicturePath;

        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
        var onSuccess = function (position) {
            var div = document.getElementById('camprev');
            div.innerHTML =
                'Latitude: ' + position.coords.latitude + '\n' +
                'Longitude: ' + position.coords.longitude + '\n' +
                'Altitude: ' + position.coords.altitude + '\n' +
                'Accuracy: ' + position.coords.accuracy + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                'Heading: ' + position.coords.heading + '\n' +
                'Speed: ' + position.coords.speed + '\n' +
                'Timestamp: ' + position.timestamp + '\n';
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            var div = document.getElementById('camprev');
            div.innerHTML ='code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n';
        }
        var posOptions = { timeout: 10000, enableHighAccuracy: false };

        navigator.geolocation.getCurrentPosition(onSuccess, onError, posOptions);

    });
})
      
.controller('favoritesCtrl', function($scope) {

})
   
.controller('hereILeftMyCarCtrl', function($scope, $state) {

    var latLng;
    function onSuccess(position){ 
         latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    }
    function onError(error){
            console.log("Could not get location");
    }
    var options = {timeout: 10000, enableHighAccuracy: true};
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError,options);

    var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function () {

        var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });

        var infoWindow = new google.maps.InfoWindow({
            content: "Here I am!"
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
        });

    });

    
})

   
.controller('historyCtrl', function($scope) {

})
 