'use strict';

angular.module('ImaginaryRecordsApp', ['ngGrid'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/mailing', {
        templateUrl: 'views/mailing.html',
        controller: 'MailingCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
