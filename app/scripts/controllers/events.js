'use strict';

angular.module('ImaginaryRecordsApp')
  .controller('EventsCtrl', function ($scope) {
    $scope.myData = [{eventName: "Modest Mouse Concert", description: 'Modest Mouse plays the Bluebird'},
                     {eventName: "Battles Live Show", description: 'Battles at Red Rocks'},
                     {eventName: "Islands Record Release", description: 'Release party at Three Kings'},
                     {eventName: "Squarepusher DJ Set", description: 'Live DJ set from Sputnik'},
                     {eventName: "Zs Open Mic", description: 'Zs host an open mic at Cervantes'}];
    $scope.myOptions = { 	data: 'myData', 
    						columnDefs: [{ field: 'eventName', displayName: 'Event'},
                                    	{ field: 'description', displayName: 'Event Description'}] };
  });
