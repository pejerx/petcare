package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Veterinarian;
import com.example.backend.service.VeterinarianService;

@RestController
@RequestMapping("/api/veterinarians")
@CrossOrigin(origins = "http://localhost:5173") // Adjust to your frontend port
public class VeterinarianController {

    @Autowired
    private VeterinarianService veterinarianService;

    @GetMapping
    public List<Veterinarian> getAll() {
        return veterinarianService.getAllVeterinarians();
    }

    @GetMapping("/email/{email}")
    public Optional<Veterinarian> getByEmail(@PathVariable String email) {
        return veterinarianService.getByEmail(email);
    }

    @PostMapping
    public Veterinarian create(@RequestBody Veterinarian vet) {
        return veterinarianService.createVeterinarian(vet);
    }

    @GetMapping("/exists/email/{email}")
    public boolean emailExists(@PathVariable String email) {
        return veterinarianService.emailExists(email);
    }

    @GetMapping("/exists/phone/{phone}")
    public boolean phoneExists(@PathVariable String phone) {
        return veterinarianService.phoneExists(phone);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Veterinarian loginData) {
        return veterinarianService.verifyCredentials(loginData.getEmail(), loginData.getPassword());
    }

    
}
