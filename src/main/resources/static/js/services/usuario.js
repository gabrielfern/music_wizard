app.service('usuario', function(artistas, playlists) {
    this.logado = false
    this.usuario = {
        nome: '',
        email: '',
        senha: ''
    }
})
