angular.module('blogs.controller', ["firebase", "ngSanitize"])
.controller('blogs', ['$scope' ,'$rootScope', '$firebaseArray', '$location', function ($scope, $rootScope, $firebaseArray) {
	var ref = new Firebase("https://liamwalls-d3e92.firebaseio.com/blogs");
	$rootScope.blogs = $firebaseArray(ref);

	$scope.openBlog = function(blog){
		$rootScope.idNumber = blog;
		
		//window.location = window.location.hostname + "#/blogs/blog/";

		 animateContent(this, true);
	}

}]);