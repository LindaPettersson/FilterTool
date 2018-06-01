myApp.controller('navController', ['$scope', '$location', function($scope, $location){
	
	//Destination will match location path
	$scope.isActive = function(destination){
		return destination === $location.path();
	}
}]);