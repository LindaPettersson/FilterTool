myApp.controller('choosefilesController', ['$scope', '$location', function($scope, $location){
	$scope.files = []; 
	
	//Proceed to display files in 'Summary types'
	$scope.uploadFile = function(){
//		var uploadUrl = "/choosfiles";
//	    fileUpload.uploadFileToUrl(file, uploadUrl);
		
	    $location.path('/summarytypes');
	};
	
	
}]);