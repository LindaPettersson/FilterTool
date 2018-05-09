var myApp = angular.module('myApp', ['ngRoute']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
	$routeProvider.otherwise({redirectTo: '/home'});
	
	//remove hashtag from url
	$locationProvider.html5Mode({enabled: true, requireBase: false});
	
}]);