app.service('playlist', function(album) {
    return function(nome) {
        this.nome = nome
        this.musicas = []
    }
})
