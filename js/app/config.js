/*******************************************************************************
    Config
*******************************************************************************/

liamApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: '/views/home.html',
    })
    .when('/', {
        templateUrl: '/views/blog.html',
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
