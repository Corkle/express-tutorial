angular.module('users').factory('Authentication', [function() {
	console.log(this.user);
	return {
		user: this.user
	};
}]);