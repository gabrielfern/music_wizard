app.controller('add-musica', function($scope, artistas) {
    $scope.addFalha = false
    $scope.addSucesso = false
    $scope.artistas = artistas.artistas
    $scope.bloqAddButton = true

    for (let campo of ['musica', 'artista', 'album', 'ano', 'duracao']) {
        $scope.$watch(campo, function() {
            $scope.bloqAddButton = !$scope.musica || !$scope.artista || !$scope.album || !$scope.ano || !$scope.duracao
        })
    }
    $scope.addMusica = function() {
        let result = artistas.addMusica($scope.musica, $scope.artista.nome, $scope.album, $scope.ano, $scope.duracao)

        if (result) {
            $scope.addSucesso = true
            setTimeout(function() {
                $scope.addSucesso = false
                $scope.$apply()
            }, 4000)
        }
        else {
            $scope.addFalha = true
            setTimeout(function() {
                $scope.addFalha = false
                $scope.$apply()
            }, 4000)
        }

        $scope.musica = $scope.album = $scope.ano = $scope.duracao = ''
    }
})
