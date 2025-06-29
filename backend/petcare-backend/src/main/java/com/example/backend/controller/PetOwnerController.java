package com.example.backend.controller;

import com.example.backend.model.PetOwner;
import com.example.backend.service.PetOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/petowners")
@CrossOrigin(origins = "*")
public class PetOwnerController {

    @Autowired
    private PetOwnerService petOwnerService;

    @GetMapping
    public ResponseEntity<List<PetOwner>> getAllPetOwners() {
        List<PetOwner> petOwners = petOwnerService.getAllPetOwners();
        return ResponseEntity.ok(petOwners);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PetOwner> getPetOwnerById(@PathVariable Long id) {
        Optional<PetOwner> petOwner = petOwnerService.getPetOwnerById(id);
        return petOwner.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<PetOwner> getPetOwnerByEmail(@PathVariable String email) {
        Optional<PetOwner> petOwner = petOwnerService.getPetOwnerByEmail(email);
        return petOwner.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createPetOwner(@RequestBody PetOwner petOwner) {
        try {
            PetOwner createdPetOwner = petOwnerService.createPetOwner(petOwner);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPetOwner);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePetOwner(@PathVariable Long id, @RequestBody PetOwner petOwnerDetails) {
        try {
            PetOwner updatedPetOwner = petOwnerService.updatePetOwner(id, petOwnerDetails);
            return ResponseEntity.ok(updatedPetOwner);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePetOwner(@PathVariable Long id) {
        try {
            petOwnerService.deletePetOwner(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/check-email/{email}")
    public ResponseEntity<Boolean> checkEmailExists(@PathVariable String email) {
        boolean exists = petOwnerService.existsByEmail(email);
        return ResponseEntity.ok(exists);
    }

    @GetMapping("/check-phone/{phoneNumber}")
    public ResponseEntity<Boolean> checkPhoneExists(@PathVariable String phoneNumber) {
        boolean exists = petOwnerService.existsByPhoneNumber(phoneNumber);
        return ResponseEntity.ok(exists);
    }
} 