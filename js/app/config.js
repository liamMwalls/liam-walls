/*******************************************************************************
    Config
*******************************************************************************/

liamApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: '/views/home.html',
    })
    .when('/blogs/', {
        templateUrl: '/views/blogs.html',
    })
    .when('/work/', {
        templateUrl: '/views/work.html',
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
