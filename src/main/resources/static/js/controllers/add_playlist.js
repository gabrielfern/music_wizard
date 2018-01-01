app.controller('add-playlist', function($scope, usuario, playlists) {
    $scope.showAlert = false
    $scope.alertType = ''
    $scope.alertMsg = ''

    $scope.addPlaylist = function() {
        let result = playlists.addPlaylist($scope.playlistNome)

        if (result) {
            usuario.savePlaylists()
            $scope.alertType = 'success'
            $scope.showAlert = true
            $scope.alertMsg = 'Playlist adicionada com sucesso'
        }
        else {
            $scope.alertType = 'danger'
            $scope.showAlert = true
            $scope.alertMsg = 'Playlist já existente'
        }

        $scope.playlistNome = ''
    }

    $scope.closeAlert = function() {
        $scope.showAlert = false
    }
})
