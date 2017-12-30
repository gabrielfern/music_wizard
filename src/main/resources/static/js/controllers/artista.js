app.controller('artista', function($scope, $routeParams, usuario, artistas) {
    $scope.artista = artistas.artistas[artistas.indexOf($routeParams.nome)]
    $scope.nota = $scope.artista.nota
    $scope.musica = $scope.artista.ultimaOuvida
    $scope.favorito = $scope.artista.favorito


    $scope.favoritar = function() {
        if ($scope.artista.favorito) {
            $scope.artista.favorito = $scope.favorito = true
            $('#favoritoModal').modal()
        }
        else {
            $scope.artista.favorito = $scope.favorito = true
            usuario.saveArtistas()
        }
    }

    $scope.desfavoritar = function() {
        $scope.artista.favorito = $scope.favorito = false
        usuario.saveArtistas()
    }

    $scope.$watch('nota', function() {
        if ($scope.nota)
            $scope.artista.nota = $scope.nota
        else
            $scope.artista.nota = $scope.nota = -1
        usuario.saveArtistas()
    })

    $scope.$watch('musica', function() {
    	$scope.artista.ultimaOuvida = $scope.musica
    	usuario.saveArtistas()
    })
})
