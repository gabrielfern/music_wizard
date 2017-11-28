app.service('playlists', function(playlist) {
    this.playlists = []

    this.indexOf = function(nome) {
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].nome == nome)
                return i
        }
        return -1
    }
})
