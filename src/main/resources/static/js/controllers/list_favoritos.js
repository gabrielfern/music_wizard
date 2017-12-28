app.controller('list-favoritos', function($scope, artistas) {
    $scope.favoritos = artistas.getFavoritos()
})
