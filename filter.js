use strict;

var app = angular.module('filters', []);
app.controller('demo', function($scope){  
  $scope.myString = "the quick brown fox jump over the lazy dog";
})
app.filter('cut', ['$filter', function($filter) {
   return function(input, limit=20) {
      //if (!limit) limit = 20;
      if (!input) return;
      if (input.length <= limit) {
          return input;
      }
      return $filter('limitTo')(input, limit) + '...';     
   };  
}]);
