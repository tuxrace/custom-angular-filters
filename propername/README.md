## Angular custom filter, that transforms a smallcase to a proper name with address if gender is specified.

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

To use

    {{'arman' | propername: 'm'}}
Result

    Mr. Arman
Or

    {{'arman' | propername}}

Result

    Arman

Or

    <ul class="list"> 
      <li ng-repeat="n in names | orderBy: -first">{{n.first | propername}}</li>                 
    </ul>

Result

    Arman
    Jane



working example here - http://codepen.io/anon/pen/pgNEEp
