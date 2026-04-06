package com.example.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    
    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User user) {
    User existing = repo.findByEmailAndPassword(user.getEmail(), user.getPassword());

    if (existing == null) {
        return ResponseEntity.status(401).body("Invalid email or password");
    }

    return ResponseEntity.ok(existing);
}
}