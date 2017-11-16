app.service('artista', function() {
    return function(nome, url) {
        this.nome = nome
        this.url = url || ''
        this.albuns = []
        this.toString = function() {
            console.log(this.nome)
        }
    }
})
