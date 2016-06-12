'use strict';

/**
 * @ngdoc function
 * @name sujayKhandekarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sujayKhandekarApp
 */
angular.module('sujayKhandekarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.contactLinks = [
      {
        "name": "Google+",
        "icon":"fa fa-google-plus fa-2x",
        "link":"https://plus.google.com/105856798281199967470/posts"
      },
      {
        "name": "Twitter",
        "icon":"fa fa-twitter fa-2x",
        "link":"https://twitter.com/sujaykhandekar"
      },
      {
        "name": "LinkedIn",
        "icon":"fa fa-linkedin fa-2x",
        "link":"https://www.linkedin.com/in/sujaykhandekar"
      },
      {
        "name": "Quora",
        "link": "http://www.quora.com/Sujay-Khandekar-1"
      },
      {
        "name": "Resume",
        "icon":"fa fa-file-text-o fa-2x",
        "link":"images/resume.pdf"
      }

    ];
  });