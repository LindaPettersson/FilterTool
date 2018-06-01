myApp.controller('summarytypesController', ['$scope', '$location', 'NgTableParams', function($scope, $location, NgTableParams){
	
	//Back to choosefiles
	$scope.goToChooseFiles = function(){
		$location.path('/choosefiles');
	};
	
	
	/* TODO
	 * Get summary for exception types from FileHandler class
	 * Replace mock data
	 */
	
	//Display mock data in table
	var data = [
		{date: "2018-05-08 15:14:25", name: "IdSekretess", amount: 25},
		{date: "2018-05-08 10:11:02", name: "FileNotFound", amount: 7},
		{date: "2018-05-07 17:00:25", name: "IdDataFinnsEj", amount: 1},
		{date: "2018-05-06 09:14:30", name: "IllegalArgument", amount: 9},
		{date: "2018-05-08 15:14:25", name: "Mg", amount: 3},
		{date: "2018-05-08 10:11:02", name: "ZiCRL", amount: 7},
		{date: "2018-05-07 17:00:25", name: "Id", amount: 1},
		];
	$scope.tableParams = new NgTableParams({}, { dataset: data});
	
	//Go to summary stacktrace
	$scope.goToSummaryStacktrace = function(){
		$location.path('/summarystacktrace');
	};
	
	
	//Go to summary exceptions
	$scope.goToSummaryException = function(){
		$location.path('/summaryexceptions');
	};
	
	
}]);