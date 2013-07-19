'use strict';

angular.module('ImaginaryRecordsApp')
  .controller('ArtistsCtrl', function ($scope) {
    $scope.artists = [
      {
      	name: 'Modest Mouse', 
      	description: 'Modest Mouse is an American indie rock band formed in 1993 in Issaquah, Washington, by singer/lyricist/guitarist Isaac Brock, drummer Jeremiah Green, and bassist Eric Judy. Since their 1996 debut album, This Is a Long Drive for Someone with Nothing to Think About, their lineup has centered around Brock, Green, and Judy. Guitarist Johnny Marr (formerly of The Smiths) joined the band in May 2006, along with percussionist Joe Plummer (formerly of the Black Heart Procession) and multi-instrumentalist Tom Peloso, to work on the album We Were Dead Before the Ship Even Sank.',
      	imageUrl: 'http://www.theaureview.com/sites/default/files/Modest-Mouse.jpg'
      },
      {
      	name: 'Battles',
      	description: 'Battles is an American experimental rock group, founded in 2002 in New York City by Ian Williams (formerly of Don Caballero and Storm & Stress). The current line-up is guitarist/ keyboardist Ian Williams, guitarist/ bassist Dave Konopka (formerly of Lynx), and drummer John Stanier (formerly of Helmet).',
      	imageUrl: 'http://byt.wpengine.netdna-cdn.com/wp-content/uploads/2012/06/BATTLES_7_Jason_Frank_Rothenberg_2011.excl1_.jpg'
      },
      {
      	name: 'Islands',
      	description: 'Islands is an indie rock band formed in 2005 in Montreal, Quebec, Canada, and currently based in Los Angeles, California.',
      	imageUrl: 'http://youaintnopicasso.com/images/islands.jpg'
      },
      {
      	name: 'Squarepusher',
      	description: 'Squarepusher is the principal pseudonym adopted by Tom Jenkinson, a UK based recording artist. His compositions draw on a number of influences including drum and bass, acid house, jazz and electroacoustic music. His recordings are typified by a combination of electronic sound sources, live instrumental playing and digital signal processing.',
      	imageUrl: 'http://userserve-ak.last.fm/serve/_/339429/Squarepusher.jpg'
      },
      {
      	name: 'Zs',
      	description: 'Zs was founded in 2000 by tenor saxophonist and composer Sam Hillmer. Since the band’s inception ZS has incarnated as everything from a sextet to a duo, most recently featuring Ben Greenberg (electric guitar), Tony Lowe (electric guitar), and Ian Antonio (drum set), in addition to Hillmer’s signature sax ranting.',
      	imageUrl: 'http://graphics8.nytimes.com/images/2012/08/31/arts/31ZS_SPAN/31ZS_SPAN-articleLarge.jpg'
      },
    ];
  });
