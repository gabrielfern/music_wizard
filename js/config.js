app = angular.module('music-wizard', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        activeTab: 'home'
    })

    $routeProvider.when('/add_artist', {
        templateUrl: '/views/add_artista.html',
        controller: 'add-artista',
        activeTab: 'none'
    })

    $routeProvider.when('/list_artist', {
        templateUrl: '/views/list_artistas.html',
        activeTab: 'none'
    })

    $routeProvider.when('/about', {
        templateUrl: '/views/about.html',
        activeTab: 'about'
    })
})
