package com.example.backend.repository;

import com.example.backend.model.PetOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PetOwnerRepository extends JpaRepository<PetOwner, Long> {
    
    Optional<PetOwner> findByEmail(String email);
    
    Optional<PetOwner> findByPhoneNumber(String phoneNumber);
    
    boolean existsByEmail(String email);
    
    boolean existsByPhoneNumber(int phoneNumber);
} 
