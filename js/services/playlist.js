app.service('playlist', function() {
    return function(nome) {
        this.nome = nome
        this.musicas = []

        this.indexOf = function(nome) {
            for (let i = 0; i < this.musicas.length; i++) {
                if (this.musicas[i].nome == nome)
                    return i
            }
            return -1
        }
    }
})
