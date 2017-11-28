app.service('album', function(musica) {
    return function(nome) {
        this.nome = nome
        this.musicas = []

        this.addMusica = function(nome, artista, album, ano, duracao) {
            let index = this.indexOf(nome)
            if (index > -1)
                return false
            this.musicas.push(new musica(nome, artista, album, ano, duracao))
            return true
        }
        this.indexOf = function(nome) {
            for (let i = 0; i < this.musicas.length; i++) {
                if (this.musicas[i].nome == nome)
                    return i
            }
            return -1
        }
    }
})
