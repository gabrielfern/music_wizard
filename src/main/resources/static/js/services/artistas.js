app.service('artistas', function(artista) {
    this.artistas = []

    this.addArtista = function(nome, url) {
        let index = this.indexOf(nome)
        if (index > -1)
            return false
        this.artistas.push(new artista(nome, url))
        return true
    }
    this.indexOf = function(nome) {
        for (let i = 0; i < this.artistas.length; i++) {
            if (this.artistas[i].nome == nome)
                return i
        }
        return -1
    }
    this.addMusica = function(nome, artista, album, ano, duracao) {
        index = this.indexOf(artista)
        return this.artistas[index].addMusica(nome, artista, album, ano, duracao)
    }
    this.getFavoritos = function() {
        let favoritos = []
        for (let artista of this.artistas) {
            if (artista.favorito)
                favoritos.push(artista)
        }
        return favoritos
    }
    this.getMusicas = function() {
        let musicas = []
        for (let artista of this.artistas) {
            musicas.push(...artista.getMusicas())
        }
        return musicas
    }
})
