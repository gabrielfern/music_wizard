app.service('musica', function() {
    return function (nome, artista, album, ano, duracao) {
        this.nome = nome
        this.artista = artista
        this.album = album
        this.ano = ano
        this.duracao = duracao
    }
})
