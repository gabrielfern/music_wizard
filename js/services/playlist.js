app.service('playlist', function(artistas) {
    return function(nome) {
        this.nome = nome
        this.musicas = []

        this.indexOf = function(nome, artista, album) {
            for (let i = 0; i < this.musicas.length; i++) {
                if (this.musicas[i].nome == nome &&
                    this.musicas[i].artista == artista &&
                    this.musicas[i].album == album)
                    return i
            }
            return -1
        }
        let getMusica = function(nome, artista, album) {
            let musicas = artistas.getMusicas()
            for (musica of musicas) {
                if (musica.nome == nome &&
                    musica.artista == artista &&
                    musica.album == album) {
                    return musica
                }
            }
        }
        this.addMusica = function(nome, artista, album) {
            this.musicas.push(getMusica(nome, artista, album))
        }
        this.remMusica = function(nome, artista, album) {
            let index = this.indexOf(nome, artista, album)
            this.musicas.splice(index, 1)
        }
    }
})
