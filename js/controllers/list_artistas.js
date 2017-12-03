app.controller('list-artistas', function($scope, artistas) {
    $scope.artistas = artistas.artistas
    $scope.artistasToShow = [...artistas.artistas]

    $scope.$watch('artistaPesquisa', function() {
        if ($scope.artistaPesquisa) {
            try {
                let padrao = RegExp($scope.artistaPesquisa, 'i')
                $scope.artistasToShow = $scope.artistas.filter(arts => {
                    if (padrao.exec(arts.nome))
                        return true
                    return false
                })
            } catch(_) {

            }
        } else {
            $scope.artistasToShow = [...artistas.artistas]
        }
    })
})
