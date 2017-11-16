app.service('artistas', function(artista) {
    this.artistas = []
    this.addArtista = function(nome, url) {
        if (this.hasArtista(nome))
            return false
        this.artistas.push(new artista(nome, url))
        return true
    }
    this.hasArtista = function(nome) {
        for (let artista of this.artistas) {
            if (nome == artista.nome)
                return true
        }
        return false
    }
    this.toString = function() {
        for (let i = 1; i <= this.artistas.length; i++) {
            console.log(i, this.artistas[i])
        }
    }
})
