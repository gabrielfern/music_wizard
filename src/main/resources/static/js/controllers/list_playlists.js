app.controller('list-playlists', function($scope, playlists) {
    $scope.playlists = playlists.playlists
    $scope.remPlaylistNome = ''

    $scope.setRemPlaylistNome = function(playlist) {
        $scope.remPlaylistNome = playlist
    }
    $scope.remPlaylist = function() {
        playlists.remPlaylist($scope.remPlaylistNome)
    }
})
