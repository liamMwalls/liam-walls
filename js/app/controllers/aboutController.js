angular.module('about.controller', ["firebase", "ngSanitize"])
.controller('about', ['$scope' ,'$rootScope', '$firebaseArray', '$location', function ($scope, $rootScope, $firebaseArray) {
	var ref = new Firebase("https://liamwalls-d3e92.firebaseio.com/timeline");
	$rootScope.timeline = $firebaseArray(ref);
}]);