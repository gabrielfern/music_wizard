package io.wizard.music.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.wizard.music.Response;
import io.wizard.music.models.Usuario;
import io.wizard.music.services.UsuarioService;


@RestController
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;


    @RequestMapping("/api/has_user")
    public Response hasUser(@RequestBody Map<String, String> data) {
    	if (usuarioService.hasUser(data.get("email")))
    		return new Response("ok", null);
    	return new Response("user not found", null);
    }
    
    @RequestMapping("/api/autentica")
    public Response autentica(@RequestBody Map<String, String> data) {
    	if (usuarioService.autentica(data.get("email"), data.get("senha")))
    		return new Response("ok", null);
    	return new Response("user email and senha not match", null);
    }

    @RequestMapping("/api/get_user")
    public Response getUser(@RequestBody Map<String, String> data) {
    	return new Response("ok", usuarioService.getUser(data.get("email")));
    }

    @RequestMapping("/api/add_user")
    public Response addUser(@RequestBody Map<String, String> data) {
    	try {
    		usuarioService.addUser(new Usuario(data.get("nome"), 
    				data.get("email"), data.get("senha"), "", ""));
            return new Response("ok", null);
    	} catch (Exception e) {
			return new Response("error", null);
		}
    }
}