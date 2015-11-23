var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'users', 'todos']);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('!');
	// $locationProvider.html5Mode(true);
}]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});