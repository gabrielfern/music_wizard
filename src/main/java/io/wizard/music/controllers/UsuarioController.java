package io.wizard.music.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.wizard.music.Request;
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
        Usuario user = usuarioService.getUser(data.get("email"), data.get("senha"));
        if (user != null)
            return new Response("ok", user);
        return new Response("user not found or email and senha not match", null);
    }

    @RequestMapping("/api/add_user")
    public Response addUser(@RequestBody Map<String, String> data) {
        if (data.get("nome") == null || data.get("nome").equals("") ||
            data.get("email") == null || data.get("email").equals("") ||
            data.get("senha") == null || data.get("senha").equals(""))
            return new Response("user nome, email or senha invalid", null);
        if (usuarioService.addUser(new Usuario(data.get("nome"),
                data.get("email"), data.get("senha"), "", "")))
            return new Response("ok", null);
        return new Response("user exists", null);
    }

    @RequestMapping("/api/get_user_artistas")
    public Response getUserArtistas(@RequestBody Map<String, String> data) {
        Usuario user = usuarioService.getUser(data.get("email"), data.get("senha"));
        if (user != null)
            return new Response("ok", user.getArtistas());
        return new Response("user not found or email and senha not match", null);
    }

    @RequestMapping("/api/set_user_artistas")
    public Response setUserArtistas(@RequestBody Request data) {
        System.out.println("Artistas -->");
        System.out.println(data.getObject());
        if (usuarioService.setUserArtistas(data.getEmail(), data.getSenha(), data.getObject()))
            return new Response("ok", null);
        return new Response("user not found or email and senha not match", null);
    }

    @RequestMapping("/api/get_user_playlists")
    public Response getUserPlaylists(@RequestBody Map<String, String> data) {
        Usuario user = usuarioService.getUser(data.get("email"), data.get("senha"));
        if (user != null)
            return new Response("ok", user.getPlaylists());
        return new Response("user not found or email and senha not match", null);
    }

    @RequestMapping("/api/set_user_playlists")
    public Response setUserPlaylists(@RequestBody Request data) {
        if (usuarioService.setUserPlaylists(data.getEmail(), data.getSenha(), data.getObject()))
            return new Response("ok", null);
        return new Response("user not found or email and senha not match", null);
    }
}
