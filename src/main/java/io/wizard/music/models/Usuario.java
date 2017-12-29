package io.wizard.music.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuarios")
public class Usuario {
	private int id;
	private String nome;
	private String email;
	private String senha;
	private String artistas;
	private String playlists;

	@Id
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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