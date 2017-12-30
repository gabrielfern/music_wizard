package io.wizard.music;

public class PlaylistsRequest {

	private String email;

	private String senha;

	private String playlists;


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

	public String getPlaylists() {
		return playlists;
	}

	public void setPlaylists(String playlists) {
		this.playlists = playlists;
	}
}