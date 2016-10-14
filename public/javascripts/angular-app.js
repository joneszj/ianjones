var app = angular.module('main', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'mainController'
        })
        .otherwise('/');
    $locationProvider.html5Mode(true);
});

app.controller('mainController', function($scope) {

});