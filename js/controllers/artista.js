app.controller('artista', function($scope, $routeParams, artistas) {
    $scope.artista = artistas.artistas[artistas.indexOf($routeParams.nome)]
    $scope.musicas = $scope.artista.getMusicas()
    $scope.musica = $scope.artista.ultimaOuvida

    $scope.$watch('musica', function() {
        if ($scope.musica)
            $scope.artista.ultimaOuvida = $scope.musica
        else
            $scope.artista.ultimaOuvida = {}
    })
})
