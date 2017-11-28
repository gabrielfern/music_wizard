app.service('artista', function(album) {
    return function(nome, url) {
        this.nome = nome
        this.url = url || ''
        this.albuns = []
        this.nota = -1
        this.ultimaOuvida = {}
        this.favorito = false

        this.addMusica = function(nome, artista, albumNome, ano, duracao) {
            index = this.indexOf(albumNome)
            if (index > -1) {
                return this.albuns[index].addMusica(nome, artista, albumNome, ano, duracao)
            } else {
                this.albuns.push(new album(albumNome))
                return this.albuns[this.albuns.length-1].addMusica(nome, artista, albumNome, ano, duracao)
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
