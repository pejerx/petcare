package com.example.backend.service;

import com.example.backend.model.Wishlist;
import com.example.backend.repository.WishlistRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;

    public WishlistService(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    public Wishlist create(Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }

    public List<Wishlist> getAll() {
        return wishlistRepository.findAll();
    }

    public Optional<Wishlist> getById(Long id) {
        return wishlistRepository.findById(id);
    }

    public Wishlist update(Long id, Wishlist updatedWishlist) {
        return wishlistRepository.findById(id)
                .map(existing -> {
                    existing.setProductId(updatedWishlist.getProductId());
                    existing.setQuantity(updatedWishlist.getQuantity());
                    
                    return wishlistRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Wishlist item not found"));
    }

    public void delete(Long id) {
        wishlistRepository.deleteById(id);
    }

    public List<Wishlist> getByUser(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }

    public void clearByUser(Long userId) {
        List<Wishlist> items = wishlistRepository.findByUserId(userId);
        wishlistRepository.deleteAll(items);
    }
}
