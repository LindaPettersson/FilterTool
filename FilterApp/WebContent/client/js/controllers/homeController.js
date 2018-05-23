myApp.controller('homeController', ['$scope', '$location', function($scope, $location){
	
	
	/*TODO
	 * Validate input
	 * Validate user
	 * Error messages
	 * Get user settings
	 */
	
	
	//If OK - Go to 'choosefiles'
	$scope.login = function(){
		$location.path('/choosefiles');
	};
	
	//Cancel login - return to intranet
	$scope.cancelLogin = function(){
		//TODO return to intranet
	}
	

}]);