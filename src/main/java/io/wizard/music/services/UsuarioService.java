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

    public Usuario getUser(String email){
        return usuarioRepository.findOne(email);
    }

	public void addUser(Usuario user) {
		usuarioRepository.save(user);
	}
}