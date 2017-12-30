app.service('usuario', function(artistas, playlists) {
    this.logado = false
    this.usuario = {
        email: '',
        senha: ''
    }

    this.logar = function(email, senha, callback) {
        this.request('autentica', {
            email: email,
            senha: senha
        }, obj => {
            if (obj.message == 'ok') {
                this.logado = true
                this.usuario.email = email
                this.usuario.senha = senha
                this.updateArtistas()
                this.updatePlaylists()
                if (callback)
                    callback(true)
            } else {
                if (callback)
                    callback(false)
            }
        })
    }

    this.deslogar = function() {
        this.logado = false
        this.usuario.email = ''
        this.usuario.senha = ''
        artistas.artistas = []
        playlists.playlists = []
    }
    
    this.updateArtistas = function() {
    	this.request('get_user_artistas', {}, obj => {
    		artistas.artistas = []
    		if (obj.object) {
    	   		obj = JSON.parse(obj.object)
        		if (obj.artistas) {
        			for (let artista of obj.artistas) {
        				artistas.addArtista(artista.nome, artista.url)
        				let index = artistas.indexOf(artista.nome)
        				artistas.artistas[index].nota = artista.nota
        				artistas.artistas[index].ultimaOuvida = artista.ultimaOuvida
        				artistas.artistas[index].favorito = artista.favorito
        				
        				for (let album of artista.albuns) {
        					for (let musica of album.musicas) {
        						artistas.addMusica(musica.nome, musica.artista, 
        								musica.album, musica.ano, musica.duracao)
        					}
        				}
        			}
        		}
    		}
    	})
    }

    this.saveArtistas = function(callback) {
        this.request('set_user_artistas', {
            object: JSON.stringify(artistas)
        }, obj => {
            if (obj.message == 'ok') {
                if (callback)
                    callback(true)
            } else {
                if (callback)
                    callback(false)
            }
        })
    }

    this.updatePlaylists = function() {
        this.request('get_user_playlists', {}, obj => {
            playlists.playlists = []
            if (obj.object) {
                obj = JSON.parse(obj.object)
                if (obj.playlists) {
                    for (let playlist of obj.playlists) {
                        playlists.addPlaylist(playlist.nome)
                        let index = playlists.indexOf(playlist.nome)
                        playlists.playlists[index].musicas = playlist.musicas
                    }
                }
            }
        })
    }

    this.savePlaylists = function(callback) {
        this.request('set_user_playlists', {
        	object: JSON.stringify(playlists)
        }, obj => {
            if (obj.message == 'ok') {
                if (callback)
                    callback(true)
            } else {
                if (callback)
                    callback(false)
            }
        })
    }

    this.request = function(resource, body, callback) {
        body.email = body.email || this.usuario.email
        body.senha = body.senha || this.usuario.senha
        fetch('/api/' + resource, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json().then(obj => {
            if (callback)
                callback(obj)
        }))
    }
    global2 = artistas
    global3 = playlists
})