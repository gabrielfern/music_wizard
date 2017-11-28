app.service('artista', function(album) {
    return function(nome, url) {
        this.nome = nome
        this.url = url || ''
        this.albuns = []
        this.nota = -1
        this.ultimaOuvida = {}
        this.favorito = false

        this.addMusica = function(nome, albumName, ano, duracao) {
            index = this.indexOf(albumName)
            if (index > -1) {
                return this.albuns[index].addMusica(nome, ano, duracao)
            } else {
                this.albuns.push(new album(albumName))
                return this.albuns[this.albuns.length-1].addMusica(nome, ano, duracao)
            }
        }
        this.indexOf = function(nome) {
            for (let i = 0; i < this.albuns.length; i++) {
                if (this.albuns[i].nome == nome)
                    return i
            }
            return -1
        }
        this.getMusicas = function() {
            let musicas = []
            for (let album of this.albuns) {
                musicas.push(...album.musicas)
            }
            return musicas
        }
    }
})
