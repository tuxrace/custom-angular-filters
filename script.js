var app = angular.module('filters', []);

app.controller('demo', function($scope){  
  $scope.names = [{first:'arman', gender:'m'},
                 {first:'Jane', gender:'f'}]
})

app.filter('propername', function(){
  return function(letter, g){
     var name = letter.substring(0,1).toUpperCase() +letter.substring(1,letter.length);
     if (g == 'm')  
       return 'Mr. ' + name 
     else if (g == 'f')
       return 'Ms. ' + name;
     else
       return name;
  }
})