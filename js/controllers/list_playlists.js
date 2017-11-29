app.controller('list-playlists', function($scope, playlists) {
    $scope.playlists = playlists.playlists

    $scope.remPlaylist = function(playlist) {
        playlists.remPlaylist(playlist)
    }
})
