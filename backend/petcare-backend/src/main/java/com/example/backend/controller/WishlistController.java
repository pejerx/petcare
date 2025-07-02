package com.example.backend.controller;

import com.example.backend.model.Wishlist;
import com.example.backend.service.WishlistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
@CrossOrigin(origins = "*")
public class WishlistController {

    private final WishlistService service;

    public WishlistController(WishlistService service) {
        this.service = service;
    }

    @PostMapping
    public Wishlist create(@RequestBody Wishlist wishlist) {
        return service.create(wishlist);
    }

    @GetMapping
    public List<Wishlist> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Wishlist> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public Wishlist update(@PathVariable Long id, @RequestBody Wishlist wishlist) {
        return service.update(id, wishlist);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
