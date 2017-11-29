app.controller('add-playlist', function($scope, playlists) {
    $scope.showAlert = false
    $scope.alertType = ''
    $scope.alertMsg = ''
    $scope.bloqAddButton = true

    $scope.addPlaylist = function() {
        let result = playlists.addPlaylist($scope.playlistNome)

        if (result) {
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
