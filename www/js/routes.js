angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.whereILeftMyCar', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whereILeftMyCar.html',
        controller: 'whereILeftMyCarCtrl'
      }
    }
  })

  .state('menu.driveTo', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/driveTo.html',
        controller: 'driveToCtrl'
      }
    }
  })

  .state('menu.saveLocation', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saveLocation.html',
        controller: 'saveLocationCtrl',
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.favorites', {
    url: '/favs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('menu.hereILeftMyCar', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hereILeftMyCar.html',
        controller: 'hereILeftMyCarCtrl'
      }
    }
  })

  .state('menu.history', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});