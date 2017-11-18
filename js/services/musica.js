app.service('musica', function() {
    return function (nome, ano, duracao) {
        this.nome = nome
        this.ano = ano
        this.duracao = duracao
    }
})
