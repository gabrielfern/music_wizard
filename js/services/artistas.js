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
        return this.artistas[index].addMusica(nome, album, ano, duracao)
    }
    this.getFavoritos = function() {
        let favoritos = []
        for (let artista of this.artistas) {
            if (artista.favorito)
                favoritos.push(artista)
        }
        return favoritos
    }
})
