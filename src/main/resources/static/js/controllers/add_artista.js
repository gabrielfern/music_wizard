app.controller('add-artista', function($scope, usuario, artistas) {
    $scope.showAlert = false
    $scope.alertType = ''
    $scope.alertMsg = ''

    $scope.addArtista = function() {
        $scope.showAlert = false

        let result = artistas.addArtista($scope.artistaNome, $scope.artistaImgUrl)
        if (result) {
        	usuario.saveArtistas()
            $scope.alertType = 'success'
            $scope.showAlert = true
            $scope.alertMsg = 'Artista cadastrado com sucesso'
        }
        else {
            $scope.alertType = 'danger'
            $scope.showAlert = true
            $scope.alertMsg = 'Artista já cadastrado no sistema'
        }
        $scope.artistaNome = $scope.artistaImgUrl = ''
    }
    $scope.closeAlert = function() {
        $scope.showAlert = false
    }
})
