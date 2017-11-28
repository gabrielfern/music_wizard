app.controller('artista', function($scope, $routeParams, artistas) {
    $scope.artista = artistas.artistas[artistas.indexOf($routeParams.nome)]
    $scope.musicas = $scope.artista.getMusicas()
    $scope.nota = $scope.artista.nota
    $scope.musica = $scope.artista.ultimaOuvida
    $scope.favorito = $scope.artista.favorito

    $scope.$watch('nota', function() {
        if ($scope.musica)
            $scope.artista.nota = $scope.nota
        else
            $scope.artista.ultimaOuvida = -1
    })
    $scope.$watch('musica', function() {
        if ($scope.musica)
            $scope.artista.ultimaOuvida = $scope.musica
        else
            $scope.artista.ultimaOuvida = {}
    })
    $scope.$watch('favorito', function() {
        $scope.artista.favorito = $scope.favorito
    })
})
