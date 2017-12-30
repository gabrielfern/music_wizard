app.controller('artista', function($scope, $routeParams, artistas) {
    $scope.artista = artistas.artistas[artistas.indexOf($routeParams.nome)]
    $scope.nota = $scope.artista.nota
    $scope.album = $scope.artista.ultimaOuvida.album
    $scope.musica = $scope.artista.ultimaOuvida.musica
    $scope.favorito = $scope.artista.favorito


    $scope.favoritar = function() {
        if ($scope.artista.favorito) {
            $scope.artista.favorito = $scope.favorito = true
            $('#favoritoModal').modal()
        }
        else {
            $scope.artista.favorito = $scope.favorito = true
        }
    }

    $scope.desfavoritar = function() {
        $scope.artista.favorito = $scope.favorito = false
    }

    $scope.$watch('nota', function() {
        if ($scope.nota)
            $scope.artista.nota = $scope.nota
        else
            $scope.artista.nota = $scope.nota = -1
    })

    $scope.$watch('album', function() {
        if ($scope.musica)
            $scope.artista.ultimaOuvida.album = $scope.album
        else
            $scope.artista.ultimaOuvida = {}
    })

    $scope.$watch('musica', function() {
        if ($scope.musica)
            $scope.artista.ultimaOuvida.musica = $scope.musica
        else
            $scope.artista.ultimaOuvida.musica = {}
    })
})
