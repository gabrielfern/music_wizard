app.controller('list-musicas', function($scope, $routeParams, artistas) {
    let artista = artistas.artistas[artistas.indexOf($routeParams.nome)]
    $scope.album = artista.albuns[artista.indexOf($routeParams.album)]
})
