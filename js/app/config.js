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
    .when('/blogs/blog', {
        templateUrl: '/views/blog-template.html',
    })
    .when('/work/', {
        templateUrl: '/views/work.html',
    })
    .when('/about/', {
        templateUrl: '/views/about.html',
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
