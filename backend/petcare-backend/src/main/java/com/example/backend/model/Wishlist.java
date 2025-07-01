package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "wishlist")
public class Wishlist {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishId;
    private Long userId;
    private Long productId;
    public Wishlist(Long wishId, Long userId, Long productId) {
        this.wishId = wishId;
        this.userId = userId;
        this.productId = productId;
    }
    public Wishlist() {
    }
    public Long getWishId() {
        return wishId;
    }
    public void setWishId(Long wishId) {
        this.wishId = wishId;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
