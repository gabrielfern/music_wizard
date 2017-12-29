package io.wizard.music.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.wizard.music.models.ExampleModel;

@Repository
public interface ExampleRepository extends CrudRepository<ExampleModel, Integer> {

}
