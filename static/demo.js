angular.module('personalSite', ['ngRoute'])

.factory('blogService', function($http) {
    return {
        getBlogPosts: function() {
            return $http.get("posts.json").then(function (resp) {
                return resp.data;
            })
        }
    }
})

.config(function($routeProvider) {
    $routeProvider

            .when('/', {
                templateUrl: 'homepage'
            })

            .when('/resume', {
                templateUrl: 'resume',
                // controller: 'ResumeController'
            })

            .when('/blog', {
                templateUrl: 'blog',
                controller: 'BlogController',
                resolve: {
                    posts: function (blogService){
                        return blogService.getBlogPosts();
                    }
                }
            })
})

.controller('BlogController', function ($scope, posts) {
    console.log('HI');
    $scope.posts = posts;
})

;

