package io.wizard.music.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.wizard.music.models.ExampleModel;
import io.wizard.music.repositories.ExampleRepository;


@Service
public class ExampleService {
    @Autowired
    ExampleRepository repo;

    public void add(ExampleModel model) {
    	repo.save(model);
    }

    public ExampleModel get(int id){
        return repo.findOne(id);
    }
}
