package io.wizard.music.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.wizard.music.models.Usuario;
import io.wizard.music.repositories.UsuarioRepository;


@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;


	public boolean hasUser(String email) {
		return usuarioRepository.exists(email);
	}
	
    private Usuario getUser(String email) {
        return usuarioRepository.findOne(email);
    }

    public Usuario getUser(String email, String senha) {
        if (this.autentica(email, senha))
        	return this.getUser(email);
        return null;
    }

	public boolean autentica(String email, String senha) {
		if (this.hasUser(email))
			if (this.getUser(email).getSenha().equals(senha))
				return true;
		return false;
	}

	public boolean addUser(Usuario user) {
		if (this.hasUser(user.getEmail()))
			return false;
		usuarioRepository.save(user);
		return true;
	}
}