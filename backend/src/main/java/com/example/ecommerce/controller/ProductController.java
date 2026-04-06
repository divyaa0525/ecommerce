package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

    private final ProductRepository repo;

    public ProductController(ProductRepository repo) {
        this.repo = repo;
    }

    // GET all products
    @GetMapping
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // POST add product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return repo.save(product);
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        repo.deleteById(id);
    }
}