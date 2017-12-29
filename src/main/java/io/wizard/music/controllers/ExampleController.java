package io.wizard.music.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import io.wizard.music.models.ExampleModel;
import io.wizard.music.services.ExampleService;

@Controller
public class ExampleController {
    @Autowired
    ExampleService service;

    @ResponseBody
    @RequestMapping("/api/get")
    ExampleModel get(@RequestParam int id) {
        return service.get(id);
    }
    
    @ResponseBody
    @RequestMapping("/api/post")
    void post(@RequestParam int id, @RequestBody String text) {
    	ExampleModel mod = new ExampleModel();
    	mod.setNumber(id);
    	mod.setText(text);
        service.add(mod);
    }
}
