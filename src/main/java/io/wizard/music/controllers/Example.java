package io.wizard.music.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Example {
    @ResponseBody
    @RequestMapping("/api/get")
    String get(@RequestParam(value="name", defaultValue="") String name) {
        return "working on it " + name;
    }
    
    @ResponseBody
    @RequestMapping("/api/post")
    String post(@RequestBody String name) {
    	System.out.println(name);
        return "ok " + name;
    }
}
