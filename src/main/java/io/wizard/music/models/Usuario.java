package io.wizard.music.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Usuario {

	@Column
	private String nome;

	@Id
	@Column
	private String email;

	@Column
	private String senha;

	@Column
	private String artistas;

	@Column
	private String playlists;


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getArtistas() {
		return artistas;
	}

	public void setArtistas(String artistas) {
		this.artistas = artistas;
	}

	public String getPlaylists() {
		return playlists;
	}

	public void setPlaylists(String playlists) {
		this.playlists = playlists;
	}
}