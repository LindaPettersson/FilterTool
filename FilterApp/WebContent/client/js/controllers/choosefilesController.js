myApp.controller('choosefilesController', ['$scope', '$location', function($scope, $location){
	
	 //Array for selected files
	 $scope.files = []; 
	 
	    
	 //Upload files and proceed to 'summarytypes'
	 $scope.Upload = function(){
		 
		 //Test code
		 alert($scope.files.length + " files selected ... Write Upload Code"); 
		 
		 //TODO
		 /* 
		  * Setup REST api
		  * 
		  * Run file(s) through FileHandler
		  * Create objects for each stacktrace and logs
		  * Return objects
		  * 
		  */
		 
		 //Proceed to 'summarytpes'
		 $location.path('/summarytypes');
		};

		
}]);