app.controller('artista', function($scope, $routeParams, artistas) {
    $scope.artista = artistas.artistas[artistas.indexOf($routeParams.nome)]
})
