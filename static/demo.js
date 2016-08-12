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
                templateUrl: '/static/homepage.html'
            })

            .when('/resume', {
                templateUrl: '/static/resume.html',
                // controller: 'ResumeController'
            })

            .when('/blog', {
                templateUrl: '/static/blog.html',
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

