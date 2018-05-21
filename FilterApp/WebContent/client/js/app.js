var myApp = angular.module('myApp', ['ngRoute', 'ngTable']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.when('/choosefiles', {templateUrl: 'partials/choosefiles.html', controller: 'choosefilesController'});
	$routeProvider.when('/summarytypes', {templateUrl: 'partials/summarytypes.html', controller: 'summarytypesController'});
	$routeProvider.otherwise({redirectTo: '/home'});
	

	
	
}]);

