package io.wizard.music.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.wizard.music.models.Usuario;


@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, String> {

}
