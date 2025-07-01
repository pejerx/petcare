package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Cart;
import com.example.backend.repository.CartRepository;
import com.example.backend.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
@Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestBody CartRequest req, @RequestHeader("Authorization") String token) {
        Long userId = jwtUtil.extractUserId(token);
        Cart item = cartService.addToCart(userId, req.getProductId(), req.getQuantity());
        return ResponseEntity.ok(item);
    }
}
