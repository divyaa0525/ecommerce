package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.ecommerce.model.CartItem;
import com.example.ecommerce.repository.CartRepository;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {

    private final CartRepository repo;

    public CartController(CartRepository repo) {
        this.repo = repo;
    }

    // GET all cart items
    @GetMapping
    public List<CartItem> getCart() {
        return repo.findAll();
    }

    // ADD to cart
    @PostMapping("/add")
    public CartItem addToCart(@RequestBody CartItem item) {
        return repo.save(item);
    }

    // REMOVE from cart
    @DeleteMapping("/remove/{id}")
    public void removeFromCart(@PathVariable Long id) {
        repo.deleteById(id);
    }
    @PutMapping("/update/{id}")
    public CartItem updateQuantity(@PathVariable Long id, @RequestParam int quantity) {
        CartItem item = repo.findById(id).orElseThrow();
        item.setQuantity(quantity);
        return repo.save(item);
    }
}