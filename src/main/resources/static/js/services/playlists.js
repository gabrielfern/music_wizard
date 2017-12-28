app.service('playlists', function(artistas, playlist) {
    this.playlists = []

    this.indexOf = function(nome) {
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].nome == nome)
                return i
        }
        return -1
    }
    this.addPlaylist = function(nome) {
        let index = this.indexOf(nome)
        if (index > -1)
            return false
        this.playlists.push(new playlist(nome))
        return true
    }
    this.remPlaylist = function(nome) {
        let index = this.indexOf(nome)
        if (index < 0)
            return false
        this.playlists.splice(index, 1)
        return true
    }
    this.getArtistas = function() {
        return artistas.artistas
    }
})
