app.controller('playlist', function($scope, $routeParams, playlists) {
    $scope.playlist = playlists.playlists[playlists.indexOf($routeParams.nome)]
    $scope.musicToDelete = {}
    $scope.artistas = playlists.getArtistas()
    $scope.albuns = []
    $scope.musicas = []
    $scope.bloqAddButton = true

    $scope.$watch('artista', function() {
        if ($scope.artista)
            $scope.albuns = $scope.artista.albuns
        else
            $scope.albuns = []
        $scope.bloqAddButton = !$scope.artista || !$scope.album || !$scope.musica
    })
    $scope.$watch('album', function() {
        if ($scope.album) {
            $scope.musicas = [...$scope.album.musicas]
            $scope.musicas = $scope.musicas.filter($scope.notAdded)
        }
        else {
            $scope.musicas = []
        }
        $scope.bloqAddButton = !$scope.artista || !$scope.album || !$scope.musica
    })
    $scope.$watch('musica', function() {
        $scope.bloqAddButton = !$scope.artista || !$scope.album || !$scope.musica
    })

    $scope.notAdded = function(musica) {
        for (let playlistMusica of $scope.playlist.musicas) {
            if (musica.nome == playlistMusica.nome &&
                musica.artista == playlistMusica.artista &&
                musica.album == playlistMusica.album)
                return false
        }
        return true
    }
    $scope.setMusicToDelete = function(nome, artista, album) {
        $scope.musicToDelete.nome = nome
        $scope.musicToDelete.artista = artista
        $scope.musicToDelete.album = album
    }
    $scope.deletar = function() {
        $scope.playlist.remMusica($scope.musicToDelete.nome,
                                  $scope.musicToDelete.artista,
                                  $scope.musicToDelete.album)
    }
    $scope.adicionar = function() {
        $scope.playlist.addMusica($scope.musica.nome,
                                  $scope.artista.nome,
                                  $scope.album.nome)
        $scope.musica = $scope.artista = $scope.album = null
    }
})
