package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tblPets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long petId;
    private String petname;
    private String type;
    private double weight;
    private String breed;

    public Pet(Long petId, String petname, String type, double weight, String breed) {
        this.petId = petId;
        this.petname = petname;
        this.type = type;
        this.weight = weight;
        this.breed = breed;
    }

    public Long getPetId() {
        return petId;
    }


    public String getPetname() {
        return petname;
    }

    public void setPetname(String petname) {
        this.petname = petname;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Pet(){}

    public void setId(Long petId2) {
         
        throw new UnsupportedOperationException("Unimplemented method 'setId'");
    }



}
