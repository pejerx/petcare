package com.example.backend.service;

import com.example.backend.model.Pet;
import com.example.backend.repository.PetRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    private final PetRepository repository;

    public PetService(PetRepository repository) {
        this.repository = repository;
    }

    public Pet create(Pet pet) {
        return repository.save(pet);
    }

    public List<Pet> getAll() {
        return repository.findAll();
    }

    public Optional<Pet> getById(Long id) {
        return repository.findById(id);
    }

    public Pet update(Long petId, Pet newData) {
        newData.setId(petId);
        return repository.save(newData);
    }

    public void delete(Long petId) {
        repository.deleteById(petId);
    }
}
