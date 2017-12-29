package io.wizard.music.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import io.wizard.music.models.Usuario;
import io.wizard.music.services.UsuarioService;


@Controller
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;


    @ResponseBody
    @RequestMapping("/api/has_user")
    public Map<String, String> hasUser(@RequestBody Map<String, String> data) {
    	Map<String, String> resp = new HashMap<>();
    	if (usuarioService.hasUser(data.get("email")))
    		resp.put("message", "ok");
    	else
    		resp.put("message", "user not found");
    	return resp;
    }

    @ResponseBody
    @RequestMapping("/api/get_user")
    public Usuario getUser(@RequestBody Map<String, String> data) {
    	return usuarioService.getUser(data.get("email"));
    }

    @ResponseBody
    @RequestMapping("/api/add_user")
    public boolean addUser(@RequestBody Map<String, String> data) {
    	try {
    		Usuario user = new Usuario();
    		user.setNome(data.get("nome"));
    		user.setEmail(data.get("email"));
    		user.setSenha(data.get("senha"));
    		user.setArtistas(data.get("artistas"));
    		user.setPlaylists(data.get("playlists"));
    		usuarioService.addUser(user);
            return true;
    	} catch (Exception e) {
			return false;
		}
    }
}