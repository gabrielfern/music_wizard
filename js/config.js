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
        controller: 'list-artistas',
        activeTab: 'none'
    })

    $routeProvider.when('/list_favoritos', {
        templateUrl: '/views/list_favoritos.html',
        controller: 'list-favoritos',
        activeTab: 'none'
    })

    $routeProvider.when('/add_playlist', {
        templateUrl: '/views/add_playlist.html',
        controller: 'add-playlist',
        activeTab: 'none'
    })

    $routeProvider.when('/list_playlists', {
        templateUrl: '/views/list_playlists.html',
        controller: 'list-playlists',
        activeTab: 'none'
    })

    $routeProvider.when('/playlist/:nome', {
        templateUrl: '/views/playlist.html',
        controller: 'playlist',
        activeTab: 'none'
    })

    $routeProvider.when('/about', {
        templateUrl: '/views/about.html',
        activeTab: 'about'
    })

    $routeProvider.when('/add_musica', {
        templateUrl: '/views/add_musica.html',
        controller: 'add-musica',
        activeTab: 'none'
    })

    $routeProvider.when('/artista/:nome', {
        templateUrl: '/views/artista.html',
        controller: 'artista',
        activeTab: 'none'
    })

    $routeProvider.when('/artista/:nome/:album', {
        templateUrl: '/views/list_musicas.html',
        controller: 'list-musicas',
        activeTab: 'none'
    })

    $routeProvider.otherwise({
        redirectTo: "/"
    })
})
