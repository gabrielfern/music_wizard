app.controller('add-musica', function($scope, usuario, artistas) {
    $scope.showAlert = false
    $scope.alertType = ''
    $scope.alertMsg = ''
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
        	usuario.saveArtistas()
            $scope.alertType = 'success'
            $scope.showAlert = true
            $scope.alertMsg = 'Música adicionada com sucesso'
        }
        else {
            $scope.alertType = 'danger'
            $scope.showAlert = true
            $scope.alertMsg = 'Música já existe nesse álbum'
        }

        $scope.musica = $scope.album = $scope.ano = $scope.duracao = ''
    }
    $scope.closeAlert = function() {
        $scope.showAlert = false
    }
})
