package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Wishlist;
import com.example.backend.repository.WishlistRepository;

@Service
public class WishlistService {
    @Autowired
    private WishlistRepository wishlistRepository;

    public List<Wishlist> getWishlistByUser(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }

    public Wishlist addToWishlist(Long userId, Long productId) {
        Wishlist item = new Wishlist();
        item.setUserId(userId);
        item.setProductId(productId);
        return wishlistRepository.save(item);
    }

    public void removeFromWishlist(Long wishlistItemId) {
        wishlistRepository.deleteById(wishlistItemId);
    }

    public void clearWishlist(Long userId) {
        List<Wishlist> items = wishlistRepository.findByUserId(userId);
        wishlistRepository.deleteAll(items);
    }
}
