app.controller('add-artista', function($scope, artistas) {
    $scope.addFalha = false
    $scope.addSucesso = false

    $scope.addArtista = function() {
        $scope.addFalha = false
        $scope.addSucesso = false

        let result = artistas.addArtista($scope.artistaNome, $scope.artistaImgUrl)

        if (result) {
            $scope.addSucesso = true
            setTimeout(function() {
                $scope.addSucesso = false
                $scope.$apply()
            }, 3000)
        }
        else {
            $scope.addFalha = true
            setTimeout(function() {
                $scope.addFalha = false
                $scope.$apply()
            }, 3000)
        }
        $scope.artistaNome = $scope.artistaImgUrl = ''
    }
})
